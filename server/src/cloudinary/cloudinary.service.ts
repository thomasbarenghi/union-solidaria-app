import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { SharpPipe } from 'src/cloudinary/sharp.pipe'; // Asegúrate de importar SharpPipe desde la ubicación correcta

@Injectable()
export class CloudinaryService {
  constructor(private readonly sharpPipe: SharpPipe) {}

  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      // Procesar la imagen con SharpPipe
      const optimizedImagePath = await this.sharpPipe.transform(file);

      // Cargar la imagen optimizada a Cloudinary
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream((error, result) => {
          if (error) return reject(error);
          resolve(result);
        });

        // Usar el archivo optimizado como entrada en lugar de file.buffer
        toStream(optimizedImagePath).pipe(upload);
      });
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante el procesamiento de la imagen
      console.error('Error al procesar la imagen:', error);
      throw error; // Puedes personalizar cómo manejar el error según tus necesidades
    }
  }
}
