import { Component, OnInit } from '@angular/core';
import { IMenuItem, SidebarService } from './sidebar.service';

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
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: Array<MenuItem>;

    constructor(private sidebarService: SidebarService) { }

    ngOnInit() {
        this.menuItems = [
            new MenuItem('About', ['/about']),
            new MenuItem('Projects', ['/projects']),
            new MenuItem('Blog', ['/blog']),
            new MenuItem('GitHub', ['https://github.com/evan-carey'])
        ];
    }
}