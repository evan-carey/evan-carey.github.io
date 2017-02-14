import { RendererService } from './renderer/renderer.service';
import { ModifierComponent } from './modifier/modifier.component';
import { GraphicsRoutingModule, routedComponents } from './graphics-routing.module';
import { GraphicsComponent } from './graphics.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [GraphicsRoutingModule],
    exports: [],
    declarations: [routedComponents, ModifierComponent],
    providers: [RendererService],
})
export class GraphicsModule { }
