import { module } from 'angular';
import { Nav } from './nav';
import { Sidebar } from './sidebar';

export const Layout =
    module('common.layout', [
        Nav,
        Sidebar
    ])
        .name;
