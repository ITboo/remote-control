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
export const drawRectangle = async (args: string[]) => {
    const width = parseInt(args[0]!, 10);
    const height = parseInt(args[1]!, 10);

    await mouse.pressButton(Button.LEFT);
    await mouse.drag(right(width));
    await mouse.drag(down(height));
    await mouse.drag(left(width));
    await mouse.drag(up(height));
    await mouse.releaseButton(Button.LEFT);
};

// Draw square with pushed left button: <- draw_square {px}
export const drawSquare = async (args: string[]) => {
    const width = parseInt(args[0]!, 10);
    const height = width;

   // await mouse.pressButton(Button.LEFT);
    await mouse.drag(right(width));
    await mouse.drag(down(height));
    await mouse.drag(left(width));
    await mouse.drag(up(height));
   // await mouse.releaseButton(Button.LEFT);
};