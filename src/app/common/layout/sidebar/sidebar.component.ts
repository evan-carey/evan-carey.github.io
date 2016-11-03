import { IMenuItem, SidebarService } from './sidebar.service';
import { NavService } from '../nav/nav.service';

import "./sidebar.scss";

export class SidebarComponent implements ng.IComponentOptions {

    constructor(
        public controller = SidebarController,
        public template = require('./sidebar.html')
    ) { }
}


class SidebarController implements ng.IComponentController {

    private _items: Array<IMenuItem>;

    constructor(private NavService: NavService, private SidebarService: SidebarService) {
        "ngInject";
    }

    public get items(): Array<IMenuItem> {
        return this.SidebarService.menuItems;
    }

    public set items(value: Array<IMenuItem>) {
        this.SidebarService.menuItems = value;
    }

    $onInit() {

    }
}

