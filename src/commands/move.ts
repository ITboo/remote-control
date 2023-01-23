import { mouse, left, right, up, down } from "@nut-tree/nut-js";

// Move mouse left <- mouse_left {x px}
export const moveLeft = async (x: number) => {
    await mouse.move(left(x));
};
// Move mouse up <- mouse_up {y px}
export const moveUp = async (y: number) => {
    await mouse.move(up(y));
};
// Move mouse right <- mouse_right {x px}
export const moveRight = async (x: number) => {
    await mouse.move(right(x));
};
// Move mouse down<- mouse_down {y px}
export const moveDown = async (y: number) => {
    await mouse.move(down(y));
};