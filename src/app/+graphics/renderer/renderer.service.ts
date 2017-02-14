import { Injectable } from '@angular/core';
import {
    PerspectiveCamera,
    WebGLRenderer,
    Scene
} from 'three';

@Injectable()
export class RendererService {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;

    constructor() {

    }

    init(container: HTMLElement) {
        const width = container.clientWidth;
        const height = container.clientHeight;

        this.renderer = new WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        this.scene = new Scene();

        this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

        this.render();
    }

    update() {

    }

    render() {
        this.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());
    }
}