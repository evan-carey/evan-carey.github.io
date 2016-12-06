import { MdSidenav } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import './app.scss';
import './material-theme.scss';

@Component({
    selector: 'ec-app',
    templateUrl: './app.component.html',
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class AppComponent implements OnInit {
    @ViewChild(MdSidenav) sidenav: MdSidenav;

    constructor() {
    }

    ngOnInit() {
        if (window.innerWidth >= 960) {
            this.sidenav.mode = "side";
            this.sidenav.opened = true;
        } else {
            this.sidenav.mode = "over";
            this.sidenav.opened = false;
        }

    }

    onResize(event: any) {
        if (this.sidenav._modeOver && event.target.innerWidth >= 960) {
            this.sidenav.mode = "side";
            this.sidenav.open();
        } else if (this.sidenav._modeSide && event.target.innerWidth < 960) {
            this.sidenav.mode = "over";
            this.sidenav.close();
        }
    }
}