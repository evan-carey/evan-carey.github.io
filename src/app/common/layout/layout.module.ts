import { LayoutService } from './layout.service';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        NavModule,
        SidebarModule
    ],
    providers: [LayoutService]
})
export class LayoutModule { }