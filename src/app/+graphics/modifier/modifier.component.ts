import { RendererService } from './../renderer/renderer.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'modifier',
    template: ``
    // templateUrl: 'modifier.component.html'
})
export class ModifierComponent implements OnInit {
    constructor(private renderer: RendererService) { }

    @Input()
    public set container(value: HTMLElement) {
        if (value) this.renderer.init(value);
    }

    ngOnInit() {
    }
}