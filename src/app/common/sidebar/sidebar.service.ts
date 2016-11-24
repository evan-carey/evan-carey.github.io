import { Injectable } from '@angular/core';

export interface IMenuItem {
    label: string;
    priority: number;
    icon?: string;
}

export interface IMenuParentItem extends IMenuItem {
    children: Array<IMenuItem>;
}

export interface IMenuChildItem extends IMenuItem {
    state: string;
}

export class MenuParentItem implements IMenuParentItem {
    // children: Array<IMenuChildItem>;

    constructor(public label: string, public children: Array<IMenuChildItem>, public priority: number = 0, public icon?: string) { }

}

export class MenuChildItem implements IMenuChildItem {
    // state: string;

    constructor(public label: string, public state: string, public priority: number = 0, public icon?: string) { }
}

@Injectable()
export class SidebarService {
    private _menuItems: Array<IMenuItem>;

    constructor() {
        this.menuItems = new Array<IMenuItem>();
    }

    public addMenuItem(item: IMenuItem) {
        this.menuItems.push(item);
    }

    public get menuItems(): Array<IMenuItem> {
        return this._menuItems;
    }

    public set menuItems(value: Array<IMenuItem>) {
        this._menuItems = value;
    }


}