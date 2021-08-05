
let container;
let view;
export function setupComments(containerTarget, viewTarget) {
    container = containerTarget;
    view = viewTarget;
}

export function viewComments() {
    container.innerHTML = '';
    container.appendChild(view);
}