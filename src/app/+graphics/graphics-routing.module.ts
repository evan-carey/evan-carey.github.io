import { GraphicsComponent } from './graphics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: GraphicsComponent,
        children: [

        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class GraphicsRoutingModule { }

export const routedComponents = [GraphicsComponent];