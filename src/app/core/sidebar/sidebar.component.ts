import { Component, OnInit, ViewChild } from '@angular/core';

import './sidebar.scss';

class MenuItem {
    constructor(
        public caption: string,
        public link: any[],
        public icon?: string,
        public iconSvgSrc?: string,
    ) { }
}

@Component({
    selector: 'ec-sidebar',
    templateUrl: './sidebar.component.html'

})
export class SidebarComponent implements OnInit {
    menuItems: Array<MenuItem>;

    constructor() {
    }

    ngOnInit() {
        this.menuItems = [
            new MenuItem('Home', ['/home'], 'home'),
            new MenuItem('About', ['/about'], 'info'),
            new MenuItem('Projects', ['/projects'], 'code'),
            new MenuItem('Blog', ['/blog'], 'chat'),
            new MenuItem('GitHub', ['https://github.com/evan-carey'], '')
        ];
    }

}
