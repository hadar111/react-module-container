'use strict';

describe('React application', function () {
  describe('life cycle events', function () {
    it('should not have navigation events', function () {
      browser.get('/');
      expect($('#got-start-loading').getText()).toBe('false');
      expect($('#got-component-ready').getText()).toBe('false');
      expect($('#got-component-will-unmount').getText()).toBe('false');
    });

    it('should have navigation events', function () {
      browser.get('/ng-router-app4');
      expect($('#got-start-loading').getText()).toBe('true');
      expect($('#got-component-ready').getText()).toBe('true');
      expect($('#got-component-will-unmount').getText()).toBe('false');
      $$('.nav').get(5).click();
      expect($('#got-component-will-unmount').getText()).toBe('true');
    });
  });

  describe('open page', function () {
    it('should display hello', function () {
      browser.get('/');
      expect($('#hello').getText()).toBe('hello');
    });

    ['ng', 'ui'].forEach(function (router, index) {
      return describe('/' + router + '-router-app/', function () {
        it('should display ' + router + ' router app', function () {
          browser.get('/' + router + '-router-app/');
          expect($('#value-in-angular').getText()).toBe('react-input-value');
          expect($(router + '-view').getText()).toBe('BAZINGA!');
          expect($('#value-in-react').getText()).toBe('angular-input-value');
          expect($('#counter').getText()).toBe('0');
        });

        it('should update inputs in nested apps', function () {
          browser.get('/' + router + '-router-app/');
          $('#counter').click();
          $('#angular-input').sendKeys('123');
          $('#react-input').sendKeys('123');
          expect($('#value-in-angular').getText()).toBe('react-input-value123');
          expect($('#value-in-react').getText()).toBe('angular-input-value123');
          expect($('#counter').getText()).toBe('1');
        });

        it('should support internal navigations', function () {
          browser.get('/' + router + '-router-app/');
          $('#counter').click();
          $('#angular-input').sendKeys('123');
          $('#react-input').sendKeys('123');
          $('#stagadish').click();
          expect($$('.nav').get(router === 'ng' ? 3 : 1).getCssValue('background-color')).toBe('rgba(255, 255, 0, 1)');
          expect($('#value-in-angular').getText()).toBe('react-input-value123');
          expect($('#value-in-react').getText()).toBe('angular-input-value123');
          expect($('#counter').getText()).toBe('1');
          expect($(router + '-view').getText()).toBe('STAGADISH!');
        });

        it('should be able to navigate from within nested app', function () {
          browser.get('/' + router + '-router-app/a');
          expect($$('.nav').get(index).getCssValue('background-color')).toBe('rgba(255, 255, 0, 1)');
          $('#react-app-link').click();
          expect($$('.nav').get(2).getCssValue('background-color')).toBe('rgba(255, 255, 0, 1)');
          $$('.react-link').get(index).click();
          expect($$('.nav').get(index).getCssValue('background-color')).toBe('rgba(255, 255, 0, 1)');
        });

        it('should be able to navigate from react embedded in angular', function () {
          browser.get('/' + router + '-router-app/');
          $('#react-input').sendKeys('123');
          $$('.react-link').get(index ? 0 : 1).click();
          expect($$('.nav').get(index ? 0 : 1).getCssValue('background-color')).toBe('rgba(255, 255, 0, 1)');
          expect($('#value-in-angular').getText()).toBe('react-input-value123');
        });
      });
    });
  });

  describe('manifest with resolve', function () {
    ['ui', 'rt'].forEach(function (router) {
      return describe('/' + router + '-router-app/', function () {
        it('should display the resolved data', function () {
          browser.get('/' + router + '-router-app/');
          expect($('#value-of-resolved-experiments').getText()).toBe(JSON.stringify({ 'specs.fed.ReactModuleContainerWithResolve': true }));
          expect($('#value-of-resolved-custom-data').getText()).toBe(JSON.stringify({ user: 'xiw@wix.com' }));
        });
      });
    });
  });

  describe('manifest with crossorigin', function () {
    it('should load the component with the crossorigin attribute', function () {
      browser.get('/rt-router-app6/');
      var lazyComponentScriptsWithCrossOrigin = $$('script').filter(function (element) {
        return element.getAttribute('src').then(function (value) {
          return value.endsWith('react-module.bundle.js');
        });
      }).filter(function (element) {
        return element.getAttribute('crossorigin').then(function (value) {
          return value !== null;
        });
      });

      expect(lazyComponentScriptsWithCrossOrigin.count()).toBe(1);
    });
  });

  describe('unload styles on destroy', function () {

    var linksToModuleWithUnloadCss = {
      notDefined: 4,
      true: 5,
      false: 6
    };

    var linksToReactModuleWithUnloadCss = {
      notDefined: 8,
      false: 9
    };

    beforeEach(function () {
      browser.get('/');
    });

    it('should by default unload css files specified inside angular manifest', function () {

      $$('.nav').get(linksToModuleWithUnloadCss.notDefined).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-4.css']);

      expectIsHidden('.demo-5');

      $$('.nav').get(linksToModuleWithUnloadCss.false).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-5.css']);
    });

    it('should not unload css files specified inside angular manifest', function () {

      $$('.nav').get(linksToModuleWithUnloadCss.false).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-5.css']);

      expectIsHidden('.demo-4');

      $$('.nav').get(linksToModuleWithUnloadCss.notDefined).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-5.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-4.css']);
    });

    it('should unload css files specified inside angular manifest', function () {

      $$('.nav').get(linksToModuleWithUnloadCss.true).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-5.css']);
      expect($('.demo-shared').getCssValue('background-color')).toBe('rgba(200, 200, 200, 1)');
      expect($('.demo-5').getCssValue('color')).toBe('rgba(5, 5, 5, 1)');
      expectIsHidden('.demo-4');

      $$('.nav').get(linksToModuleWithUnloadCss.notDefined).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-4.css']);
      expect($('.demo-shared').getCssValue('background-color')).toBe('rgba(200, 200, 200, 1)');
      expect($('.demo-4').getCssValue('color')).toBe('rgba(4, 4, 4, 1)');
    });

    it('should unload css files specified inside react manifest', function () {
      $$('.nav').get(linksToReactModuleWithUnloadCss.notDefined).click();
      $$('.nav').get(linksToModuleWithUnloadCss.false).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-5.css']);
    });

    it('should not unload css files specified inside react manifest', function () {
      $$('.nav').get(linksToReactModuleWithUnloadCss.false).click();
      $$('.nav').get(linksToReactModuleWithUnloadCss.notDefined).click();
      expect(getStyleSheetHrefs()).toEqual(['http://localhost:3200/demo.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-5.css', 'http://localhost:3200/demo-shared.css', 'http://localhost:3200/demo-4.css']);
    });

    function getStyleSheetHrefs() {
      return $$('link').map(function (elem) {
        return elem.getAttribute('href');
      });
    }

    function expectIsHidden(selector) {
      expect($(selector).getCssValue('color')).toBe('rgba(0, 0, 0, 0)');
      expect($(selector).getCssValue('display')).toBe('none');
    }
  });
});