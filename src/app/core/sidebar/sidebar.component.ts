import { Component, OnInit } from '@angular/core';

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
        public iconClass: string
    ) { }
}

@Component({
    selector: 'ec-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    menuItems: Array<MenuItem>;
    externalLinks: Array<ExternalLink>;

    constructor() {
    }

    ngOnInit() {
        this.menuItems = [
            new MenuItem('Home', ['/home'], 'home'),
            // new MenuItem('About', ['/about'], 'info'),
            new MenuItem('Projects', ['/projects'], 'code'),
            // new MenuItem('Blog', ['/blog'], 'chat'),
            new MenuItem('Fun Stuff', ['/graphics'], 'blur_on')
        ];

        this.externalLinks = [
            new ExternalLink('LinkedIn', 'https://linkedin.com/in/evancarey', 'linkedin-icon'),
            new ExternalLink('GitHub', 'https://github.com/evan-carey', 'github-icon')

        ];
    }

}
