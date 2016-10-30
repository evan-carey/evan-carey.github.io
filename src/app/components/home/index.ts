import { module } from 'angular';
import { State, StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { HomeComponent } from './home.component';

function routeConfig($stateProvider: StateProvider, ) {
    "ngInject";


    $stateProvider
        .state('app.home', {
            url: '/',
            component: 'home'
        });

}
function runConfig() {


}

export const Home: string = module('components.home', [])
    .component('home', new HomeComponent)
    .config(routeConfig)
    .run(runConfig)
    .name;
