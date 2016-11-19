import { module } from 'angular';
import { UrlRouterProvider, StateProvider } from 'angular-ui-router';
import { AppComponent } from './app.component';
import { Common } from './common';
import { Components } from './components';

import './app.scss';


function routeConfig(
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: UrlRouterProvider,
    $stateProvider: StateProvider
) {
    "ngInject";

    $stateProvider
        .state('app', {
            redirectTo: 'app.home',
            abstract: true,
            component: 'app'
        });

    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
}

function themeConfig($mdThemingProvider: ng.material.IThemingProvider) {
    "ngInject";

    // Theme made using http://mcg.mbitson.com/#/

    $mdThemingProvider.definePalette('mcgpalette0', {
        '50': '#b8bdbd',
        '100': '#909898',
        '200': '#747d7d',
        '300': '#515858',
        '400': '#434848',
        '500': '#343838',
        '600': '#252828',
        '700': '#171818',
        '800': '#080808',
        '900': '#000000',
        'A100': '#b8bdbd',
        'A200': '#909898',
        'A400': '#434848',
        'A700': '#171818',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 A100 A200'
    });

    $mdThemingProvider.definePalette('mcgpalette1', {
        '50': '#75f0ff',
        '100': '#29e7ff',
        '200': '#00d5f0',
        '300': '#0095a8',
        '400': '#007a8a',
        '500': '#005f6b',
        '600': '#00444c',
        '700': '#00292e',
        '800': '#000d0f',
        '900': '#000000',
        'A100': '#75f0ff',
        'A200': '#29e7ff',
        'A400': '#007a8a',
        'A700': '#00292e',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 A100 A200'
    });

    $mdThemingProvider.definePalette('mcgpalette2', {
        '50': '#a8f5ff',
        '100': '#5cecff',
        '200': '#24e6ff',
        '300': '#00c2db',
        '400': '#00a7bd',
        '500': '#008c9e',
        '600': '#00717f',
        '700': '#005661',
        '800': '#003b42',
        '900': '#002024',
        'A100': '#a8f5ff',
        'A200': '#5cecff',
        'A400': '#00a7bd',
        'A700': '#005661',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 300 A100 A200'
    });

    $mdThemingProvider.definePalette('mcgpalette3', {
        '50': '#d6faff',
        '100': '#8af1ff',
        '200': '#52ebff',
        '300': '#0ae2ff',
        '400': '#00cfeb',
        '500': '#00b4cc',
        '600': '#0099ad',
        '700': '#007e8f',
        '800': '#006370',
        '900': '#004852',
        'A100': '#d6faff',
        'A200': '#8af1ff',
        'A400': '#00cfeb',
        'A700': '#007e8f',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
    });

    $mdThemingProvider.definePalette('mcgpalette4', {
        '50': '#ecfdff',
        '100': '#a0f4ff',
        '200': '#68eeff',
        '300': '#20e5ff',
        '400': '#02e2ff',
        '500': '#00c8e2',
        '600': '#00adc3',
        '700': '#0092a5',
        '800': '#007786',
        '900': '#005c68',
        'A100': '#ecfdff',
        'A200': '#a0f4ff',
        'A400': '#02e2ff',
        'A700': '#0092a5',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('mcgpalette0')
        .accentPalette('mcgpalette1');

    // Mobile browser color
    $mdThemingProvider.enableBrowserColor({
        theme: 'default',
        palette: 'primary',
        hue: '800'
    });
}

export const App: string = module('app', [
    'ui.router',
    'ngMessages',
    'ngMaterial',
    'ngAria',
    'ngAnimate',
    // 'ngCookies',
    // 'ngSanitize',
    Common,
    Components
])
    .config(routeConfig)
    .config(themeConfig)
    .run(analyticsConfig)
    .component('app', new AppComponent)
    .name;

function analyticsConfig($window: ng.IWindowService, $rootScope: ng.IRootScopeService, $location: ng.ILocationService) {
    $window['ga']('create', 'UA-43021202-2', 'auto');

    $rootScope.$on('$stateChangeSuccess', event => {
        $window['ga']('send', 'pageview', $location.path());
    });
}