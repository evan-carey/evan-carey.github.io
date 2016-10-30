import { Layout } from './layout/index';
import { module } from 'angular';

export const Common: string = module('common', [
    Layout
])
    .name;