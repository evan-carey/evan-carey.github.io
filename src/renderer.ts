import { WebGLRenderer } from 'three';
import { Camera } from './cameras/perspective-camera';
import { Scene } from './scene';

export class Renderer {
    private renderer: WebGLRenderer;
    private cameraCmp: Camera;
    private sceneCmp: Scene;

    get scene() {
        return this.sceneCmp.scene;
    }
    get camera() {
        return this.sceneCmp.camera;
    }

    constructor(
        private container: HTMLElement = document.body,
        private width: number = window.innerWidth,
        private height: number = window.innerHeight
    ) {
        // create renderer
        this.renderer = new WebGLRenderer();

        // set dimensions
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // set camera
        this.cameraCmp = new Camera(this.width, this.height);

        // set scene
        this.sceneCmp = new Scene();

        // bind renderer to DOM
        this.container.appendChild(this.renderer.domElement);
    }

    update() {}

    timer() {}

    render() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());
    }

    private onWindowResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.camera.updateAspect(this.width, this.height);
    }
}
