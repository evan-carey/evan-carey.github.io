import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsRoutingModule, routedComponents } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
// import { ProjectsService } from './projects.service';

@NgModule({
    imports: [ProjectsRoutingModule, CommonModule],
    exports: [],
    declarations: [ProjectsComponent, routedComponents],
    // providers: [ProjectsService],
})
export class ProjectsModule { }
