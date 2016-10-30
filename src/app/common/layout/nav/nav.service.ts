export interface NavItem {
    state: string;
    label: string;
    icon: string;
}


export class NavService {

    isSidebarOpen: boolean;

    navItems: Array<NavItem>;


    constructor() {
        this.navItems = new Array<NavItem>();
    }

    addNavItem(navItem: NavItem) {
        this.navItems.push(navItem);
    }
}