import Jimp from 'jimp';
import { mouse, Region, screen } from '@nut-tree/nut-js';

// Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position): <- prnt_scrn -> prnt_scrn {base64 string (png buf)}

export const getScreenShot = async () => {

    const {x, y} = await mouse.getPosition();
    //around the mouse position
    const region = new Region(x, y, 200, 200);

    //grabRegion allows you to retrieve an Image containing the current content of a desktop region.
    const image = await (await screen.grabRegion(region)).toRGB();

    const screenshot = new Jimp({
        data: image.data,
        width: image.width,
        height: image.height,
      });

      const buffer = await screenshot.getBufferAsync(Jimp.MIME_PNG) // "image/png"
      const base64 = buffer.toString('base64');

      return base64;
};