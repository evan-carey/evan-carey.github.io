import { Injectable } from '@angular/core';


@Injectable()
export class SidebarService {
    private _isSidebarOpen: boolean;

    constructor() {
    }

    public get isSidebarOpen(): boolean {
        return this._isSidebarOpen;
    }

    public set isSidebarOpen(value: boolean) {
        this._isSidebarOpen = value;
    }

    public toggleSidebar() {
        // this.mdSidenav.toggle();
        // _.debounce(() => this.mdSidenav.toggle(), 250)();
    }


}