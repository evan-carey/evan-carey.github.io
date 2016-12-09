import { NgModule } from '@angular/core';

import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [HomeRoutingModule],
    exports: [],
    declarations: [HomeComponent, routedComponents],
    providers: [],
})
export class HomeModule { }
