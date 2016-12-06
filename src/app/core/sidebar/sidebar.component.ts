import { SidebarService } from './sidebar.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import "./sidebar.scss";

class MenuItem {
    constructor(
        public caption: string,
        public link: any[],
        public icon?: string
    ) { }
}

@Component({
    selector: 'ec-sidebar',
    templateUrl: './sidebar.component.html',

})
export class SidebarComponent implements OnInit {
    menuItems: Array<MenuItem>;

    isSidebarOpened: boolean;

    constructor(private sidebarService: SidebarService) {
        this.isSidebarOpened = sidebarService.isSidebarOpen;
    }

    ngOnInit() {
        this.menuItems = [
            new MenuItem('About', ['/about']),
            new MenuItem('Projects', ['/projects']),
            new MenuItem('Blog', ['/blog']),
            new MenuItem('GitHub', ['https://github.com/evan-carey'])
        ];
    }

    onResize(event) {
        console.log(event.target.innerWidth);
    }
}
