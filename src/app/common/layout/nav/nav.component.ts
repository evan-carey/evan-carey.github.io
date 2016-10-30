import * as _ from 'lodash';
import { NavService } from './nav.service';

export class NavComponent implements ng.IComponentOptions {
    constructor(
        public controller = NavController,
        public template = require('./nav.html')
    ) { }
}

class NavController implements ng.IComponentController {

    constructor(
        private $mdMedia: ng.material.IMedia,
        private $mdSidenav: ng.material.ISidenavService,
        private NavService: NavService
    ) {
        "ngInject";
    }

    $onInit() { }

    openSidebar(navId: string) {
        _.debounce(() => this.$mdSidenav(navId).toggle(), 300)();
    }

    hideMenuButton() {
        return this.$mdMedia('gt-sm');
    }
}