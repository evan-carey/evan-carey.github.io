import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from './sidebar';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [SidebarModule],
    // declarations: [SidebarComponent],
    exports: [SidebarComponent]
})
export class CommonModule { }
