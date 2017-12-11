import { RendererService } from './renderer/renderer.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'ec-graphics',
    templateUrl: 'graphics.component.html',
    styleUrls: ['graphics.component.scss'],
    providers: [RendererService]
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