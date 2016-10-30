import { module } from 'angular';
import { Home } from './home';

export const Components: string = module('components', [
    Home
])
    .name;