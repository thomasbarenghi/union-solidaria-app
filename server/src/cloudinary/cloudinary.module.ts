import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';
import { SharpPipe } from './sharp.pipe';

@Module({
  providers: [CloudinaryProvider, CloudinaryService, SharpPipe],
  exports: [CloudinaryProvider, CloudinaryService, SharpPipe],
})
export class CloudinaryModule {}
