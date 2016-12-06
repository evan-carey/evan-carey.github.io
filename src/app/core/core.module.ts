import { MdSidenavModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { SidebarService } from './sidebar/sidebar.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './../core/sidebar/sidebar.component';


@NgModule({
    imports: [
        RouterModule, CommonModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdButtonModule
    ],
    exports: [
        RouterModule,
        CommonModule,
        [SidebarComponent, NavComponent]
    ],
    declarations: [SidebarComponent, NavComponent],
    providers: [SidebarService],
})
export class CoreModule { }
