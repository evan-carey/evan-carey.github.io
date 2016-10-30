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

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('green');
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
    .component('app', new AppComponent)
    .name;