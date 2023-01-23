import { mouse, left, right, up, down } from "@nut-tree/nut-js";

// Move mouse left <- mouse_left {x px}
export const moveLeft = async (a: number) => {
    await mouse.move(left(a));
};
// Move mouse up <- mouse_up {y px}
export const moveUp = async (a: number) => {
    await mouse.move(up(a));
};
// Move mouse right <- mouse_right {x px}
export const moveRight = async (a: number) => {
    await mouse.move(right(a));
};
// Move mouse down<- mouse_down {y px}
export const moveDown = async (a: number) => {
    await mouse.move(down(a));
};