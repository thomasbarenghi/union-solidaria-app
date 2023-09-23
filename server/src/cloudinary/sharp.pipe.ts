import { Injectable } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common';
import * as sharp from 'sharp';
import * as path from 'path';
import * as fs from 'fs/promises';

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<Buffer>>
{
  async transform(image: Express.Multer.File): Promise<Buffer> {
    const originalName = path.parse(image.originalname).name;
    const filename = Date.now() + '-' + originalName + '.webp';

    const outputPath = path.join('uploads', filename);

    // Asegúrate de que el directorio "uploads" exista
    await fs.mkdir('uploads', { recursive: true });

    await sharp(image.buffer)
      .resize(800)
      .webp({ effort: 3 })
      .toFile(outputPath);

    // Lee el archivo recién creado en un búfer
    const optimizedImageBuffer = await fs.readFile(outputPath);

    // Elimina el archivo temporal
    await fs.unlink(outputPath);

    return optimizedImageBuffer;
  }
}
