import { MdSidenav } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ec-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
    @Input() sidenav: MdSidenav;
    @Input() showMenuButton: boolean;

    constructor() { }

    ngOnInit() { }


}
