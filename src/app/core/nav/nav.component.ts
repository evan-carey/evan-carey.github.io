// import { SidebarService } from './../../core/sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
    selector: 'ec-nav',
    templateUrl: './nav.html'
})
export class NavComponent implements OnInit {
    constructor(private mdSidebar: MdSidenav) { }

    ngOnInit() { }

    openSidebar(navId: string) {
        _.debounce(() => this.mdSidebar.toggle(), 250)();
    }

    hideMenuButton() {
        // TODO hide if width >= 960px
    }
}
// class NavController implements ng.IComponentController {

//     constructor(
//         private $mdMedia: ng.material.IMedia,
//         private $mdSidenav: ng.material.ISidenavService,
//         private NavService: NavService
//     ) {
//         "ngInject";
//     }

//     $onInit() { }

//     openSidebar(navId: string) {
//         _.debounce(() => this.$mdSidenav(navId).toggle(), 300)();
//     }

//     hideMenuButton() {
//         return this.$mdMedia('gt-sm');
//     }
// }