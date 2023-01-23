import { mouse, Point, straightTo } from "@nut-tree/nut-js";

//Send mouse coordinates <- mouse_position -> mouse_position {x px},{y px}
export const position = async (x: number, y: number) => {
    const target = new Point(x, y);
    await mouse.move(straightTo(target));
};
