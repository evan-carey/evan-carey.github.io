import { PerspectiveCamera } from 'three';

export class Camera {
    camera: PerspectiveCamera;

    private fov: number = 75;
    private near: number = 0.1;
    private far: number = 10000;

    private get aspect(): number {
        return this.height / this.width;
    }

    constructor(private width: number = window.innerWidth, private height: number = window.innerHeight) {
        this.camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
        this.camera.position.set(0, 0, 0);
    }

    updateAspect(width: number, height: number) {
        this.width = width;
        this.height = height;

        if (this.camera) {
            this.camera.aspect = this.aspect;
            this.camera.updateProjectionMatrix();
        }
    }
}
