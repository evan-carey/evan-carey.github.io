import { Injectable } from '@angular/core';
import {
    PerspectiveCamera,
    WebGLRenderer,
    Scene
} from 'three';

@Injectable()
export class RendererService {
    scene: Scene;
    camera: PerspectiveCamera;
    private renderer: WebGLRenderer;

    private container: HTMLElement;

    /* Time */
    private startTime: number;
    private frames: number = 0;

    constructor() {

    }

    init(container: HTMLElement) {
        this.container = container;
        const width = container.clientWidth;
        const height = container.clientHeight;

        console.log(width, height);

        this.renderer = new WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        this.scene = new Scene();

        this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

        window.addEventListener("resize", this.onWindowResize, false);
        this.startTime = Date.now();

        this.render();
    }

    update() {
        this.timer();
    }

    render() {
        this.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());
    }

    private onWindowResize = () => {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    private timer() {
        let dt: number = Date.now() - this.startTime;
        if (dt >= 1000) {
            console.log("FPS: " + this.frames);
            this.frames = 0;
            this.startTime = Date.now();
        }
        this.frames++;
    }
}