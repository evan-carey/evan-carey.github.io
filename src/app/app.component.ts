import { Router, Event, NavigationStart, ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'ec-app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class AppComponent implements OnInit {
    @ViewChild(MdSidenav) sidenav: MdSidenav;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        if (window.innerWidth >= 960) {
            this.sidenav.mode = "side";
            this.sidenav.opened = true;
        } else {
            this.sidenav.mode = "over";
            this.sidenav.opened = false;
        }

        this.onRouteChange();

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

    onRouteChange() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart && this.sidenav.mode === "over") {
                this.sidenav.close();
            }
            console.log(this.route.url);
        })
    }
}