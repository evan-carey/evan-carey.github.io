import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ec-404',
    template: `
        <div>
            <h4>404 - Page Not Found</h4>
        </div>
    `
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}