import { NavService } from './nav.service';
import { module } from 'angular';
import { StateProvider } from 'angular-ui-router';
import { NavComponent } from './nav.component';

export const Nav: string =
    module('common.layout.nav', [])
        .config(($stateProvider: StateProvider) => {
            "ngInject";

        })
        .service('NavService', NavService)
        .component('nav', new NavComponent)
        .name;
