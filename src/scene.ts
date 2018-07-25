import { Scene as ThreeScene, Object3D } from 'three';
import { Camera } from './cameras/perspective-camera';

export class Scene {
    scene: ThreeScene;

    cameraCmp: Camera;

    get camera() {
        return this.cameraCmp.camera;
    }

    constructor() {
        this.scene = new ThreeScene();
    }

    add(object: Object3D) {
        this.scene.add(object);
    }
}
