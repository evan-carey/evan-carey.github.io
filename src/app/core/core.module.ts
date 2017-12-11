import { MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [RouterModule, CommonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule],
    exports: [RouterModule, CommonModule, [SidebarComponent, NavComponent]],
    declarations: [SidebarComponent, NavComponent],
    providers: []
})
export class CoreModule {}
