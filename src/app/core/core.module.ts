import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './../core/sidebar/sidebar.component';


@NgModule({
    imports: [
        RouterModule, CommonModule
    ],
    exports: [
        RouterModule,
        CommonModule,
        [SidebarComponent]
    ],
    declarations: [SidebarComponent],
    providers: [],
})
export class CoreModule { }
