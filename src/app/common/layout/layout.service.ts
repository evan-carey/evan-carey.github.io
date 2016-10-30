export class LayoutService {
    private _isSidebarOpen: boolean;

    constructor() { }

    public get isSidebarOpen(): boolean {
        return this._isSidebarOpen;
    }

    public set isSidebarOpen(value: boolean) {
        this._isSidebarOpen = value;
    }
}