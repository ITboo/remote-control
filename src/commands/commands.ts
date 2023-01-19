import { mouse, left, right, up, down, Point, straightTo, Button } from "@nut-tree/nut-js";
//import Jimp from 'jimp';

export const draw = async (x: number, y: number) => {
    await mouse.move(left(x)); // Move mouse left <- mouse_left {x px}
    await mouse.move(up(y)); // Move mouse up <- mouse_up {y px}
    await mouse.move(right(x));// Move mouse right <- mouse_right {x px}
    await mouse.move(down(y)) // Move mouse down<- mouse_down {y px}
};

//Send mouse coordinates <- mouse_position -> mouse_position {x px},{y px}
(async () => {
    const target = new Point(x, y);
    await mouse.move(straightTo(target));
})();


// Draw circle with pushed left button:<- draw_circle {px}
export const drawCircle = async (radius: number) => {
    await mouse.releaseButton(Button.LEFT);
};

// Draw rectangle with pushed left button:<- draw_rectangle {px} {px}
export const drawRectangle = async (width: number, length: number) => {
    await mouse.releaseButton(Button.LEFT);
};

// Draw square with pushed left button: <- draw_square {px}
export const drawSquare = async (width: number) => {
    await mouse.releaseButton(Button.LEFT);
};

// Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position): <- prnt_scrn -> prnt_scrn {base64 string (png buf)}