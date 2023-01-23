import Jimp from 'jimp';
import { mouse, Region, screen } from '@nut-tree/nut-js';

// Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position): <- prnt_scrn -> prnt_scrn {base64 string (png buf)}

export const getScreenShot = async () => {
    
    //200 px square
    const width = 200;
    const height = 200;

    const position = await mouse.getPosition();
    const left = position.x - 100;
    const top = position.y - 100;
    //around the mouse position
    const region = new Region(left, top, width, height);

    //grabRegion allows you to retrieve an Image containing the current content of a desktop region.
    const image = await (await screen.grabRegion(region)).toRGB();

    const screenshot = new Jimp({
        data: image.data,
        width: image.width,
        height: image.height,
      });

      const buffer = screenshot.getBufferAsync(Jimp.MIME_PNG) // "image/png"
      const base64 = buffer.toString();

      return base64;
};