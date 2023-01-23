import {
    mouse,
    Button,
    right,
    left,
    up,
    down
} from "@nut-tree/nut-js";

mouse.config.mouseSpeed = 100;

// Draw circle with pushed left button:<- draw_circle {px}
export const drawCircle = async (r: number) => {
    await mouse.pressButton(Button.LEFT);

    await mouse.releaseButton(Button.LEFT);
};

// Draw rectangle with pushed left button:<- draw_rectangle {px} {px}
export const drawRectangle = async (w: number, h: number) => {
    await mouse.pressButton(Button.LEFT);
    await mouse.drag(right(w));
    await mouse.drag(down(h));
    await mouse.drag(left(w));
    await mouse.drag(up(h));
    await mouse.releaseButton(Button.LEFT);
};

// Draw square with pushed left button: <- draw_square {px}
export const drawSquare = async (w: number, h = w) => {
    await mouse.pressButton(Button.LEFT);
    await mouse.drag(right(w));
    await mouse.drag(down(h));
    await mouse.drag(left(w));
    await mouse.drag(up(h));
    await mouse.releaseButton(Button.LEFT);
};