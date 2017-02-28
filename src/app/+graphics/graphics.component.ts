import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ec-graphics',
    templateUrl: 'graphics.component.html',
    styles: [`
        .container {
            // display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }
    `]
})
export class GraphicsComponent implements OnInit {
    container: Observable<any>;

    constructor() {
        this.container = Observable.fromEvent(window, "resize")
            .map((e: UIEvent) => {
                return {
                    width: e.target['innerWidth'],
                    height: e.target['innerHeight']
                }
            })
    }

    ngOnInit() {
        this.container.subscribe(
            value => console.log(value)
        );
    }
}