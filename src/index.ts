import { Renderer } from './renderer';

window.onload = () => {
    const container = document.getElementById('container');
    new Renderer(container).render();
};
