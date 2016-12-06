import { MdSidenav } from '@angular/material';
import { SidebarService } from './../sidebar/sidebar.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ec-nav',
    templateUrl: './nav.component.html',
    // providers: [MdSidenav]
})
export class NavComponent implements OnInit {
    @Input() sidenav: MdSidenav;
    @Input() showMenuButton: boolean;

    constructor(
        // private mdSidenav: MdSidenav,
        private sidebarService: SidebarService) { }

    ngOnInit() { }

    toggleSidenav(navId: string) {
        this.sidebarService.toggleSidebar();
        // _.debounce(() => this.sidenav.toggle(), 250)();
        this.sidenav.toggle();
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