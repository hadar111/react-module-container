import React from 'react';
import ModuleRegistry from './module-registry';
import { filesAppender, unloadStyles } from './tag-appender';
import assign from 'lodash/assign';
import * as Sentry from '@sentry/browser';

export default class BaseLazyComponent extends React.Component {

  constructor(props, manifest) {
    super(props);
    this.manifest = manifest;
  }

  get mergedProps() {
    return assign({}, this.props, this.resolvedData);
  }

  componentWillMount() {
    ModuleRegistry.notifyListeners('reactModuleContainer.componentStartLoading', this.manifest.component);
    const prepare = this.manifest.prepare ? () => this.manifest.prepare() : () => undefined;
    const filesAppenderPromise = filesAppender(this.manifest.files, this.manifest.crossorigin).then(prepare, err => {
      console.error("filesAppender failed = " + err);
      Sentry.captureMessage("filesAppender failed = " + err);
    });
    const resolvePromise = this.manifest.resolve ? this.manifest.resolve() : Promise.resolve({});
    this.resourceLoader = Promise.all([resolvePromise, filesAppenderPromise]).then(([resolvedData]) => {
      this.resolvedData = resolvedData;
      ModuleRegistry.notifyListeners('reactModuleContainer.componentReady', this.manifest.component);
    }).catch(err => {
      console.error(err);
    });
  }

  componentWillUnmount() {
    if (this.manifest.unloadStylesOnDestroy !== false) {
      unloadStyles(document, this.manifest.files);
    }
    ModuleRegistry.notifyListeners('reactModuleContainer.componentWillUnmount', this.manifest.component);
  }
}
