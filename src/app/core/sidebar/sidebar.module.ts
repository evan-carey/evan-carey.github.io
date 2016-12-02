// import { SidebarService } from './sidebar.service';
import { SidebarComponent } from './sidebar.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    exports: [SidebarComponent],
    providers: [

    ]
})
export class SidebarModule { }