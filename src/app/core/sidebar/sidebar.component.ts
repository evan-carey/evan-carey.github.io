import { Component, OnInit, ViewChild } from '@angular/core';

import './sidebar.scss';

class MenuItem {
    constructor(
        public caption: string,
        public link: any[],
        public icon?: string,
    ) { }
}

class ExternalLink {
    constructor(
        public caption: string,
        public link: string,
        public iconSvgSrc: string
    ) { }
}

@Component({
    selector: 'ec-sidebar',
    templateUrl: './sidebar.component.html'

})
export class SidebarComponent implements OnInit {
    menuItems: Array<MenuItem>;
    externalLinks: Array<ExternalLink>;

    constructor() {
    }

    ngOnInit() {
        this.menuItems = [
            new MenuItem('Home', ['/home'], 'home'),
            new MenuItem('About', ['/about'], 'info'),
            new MenuItem('Projects', ['/projects'], 'code'),
            // new MenuItem('Blog', ['/blog'], 'chat'),
        ];

        this.externalLinks = [
            new ExternalLink('LinkedIn', 'https://linkedin.com/in/evancarey', require('../../../img/linkedin.svg')),
            new ExternalLink('GitHub', 'https://github.com/evan-carey', require('../../../img/mark-github.svg'))

        ]
    }

}
