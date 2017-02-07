import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

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

    constructor(private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.menuItems = [
            new MenuItem('Home', ['/home'], 'home'),
            // new MenuItem('About', ['/about'], 'info'),
            new MenuItem('Projects', ['/projects'], 'code'),
            // new MenuItem('Blog', ['/blog'], 'chat'),
        ];

        // this.mdIconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('../../../img/linkedin.svg'));
        // this.mdIconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('../../../img/mark-github.svg'));

        this.externalLinks = [
            new ExternalLink('LinkedIn', 'https://linkedin.com/in/evancarey', 'linkedin-icon'),
            new ExternalLink('GitHub', 'https://github.com/evan-carey', 'github-icon')

        ];
    }

}
