import { SidebarService } from './sidebar.service';
import { module } from 'angular';
import { SidebarComponent } from './sidebar.component';

export const Sidebar: string = module('common.layout.sidebar', [])
    .component('sidebar', new SidebarComponent())
    .service('SidebarService', SidebarService)
    .name;
