import { RendererService } from './../renderer/renderer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Mesh, PointLight, AmbientLight, Geometry, BoxGeometry, Material, MeshPhongMaterial, Vector3 } from "three";

@Component({
    selector: 'modifier',
    template: ``
    // templateUrl: 'modifier.component.html'
})
export class ModifierComponent implements OnInit {

    cube: Mesh;
    light: PointLight;

    constructor(private renderer: RendererService) { }

    @Input()
    public set container(value: HTMLElement) {
        if (value) this.renderer.init(value);
    }

    ngOnInit() {
        let pLight = new PointLight(0xffffff, .7);
        pLight.position.set(3, 10, 3);
        this.renderer.scene.add(pLight);

        let aLight = new AmbientLight(0xffffff, 0.1);
        this.renderer.scene.add(aLight);

        let geometry: Geometry = new BoxGeometry(2, 2, 2);
        let material: Material = new MeshPhongMaterial({
            color: 0x00ff00,
            specular: 0xffffff,
            shininess: 56
        });
        this.cube = new Mesh(geometry, material);
        this.cube.translateZ(-5);
        this.cube.translateY(-1);
        this.cube.rotateY(0.1);
        this.renderer.scene.add(this.cube);


    }
}