import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DocumentModule } from './document/document.module';
import { MarkerModule } from './marker/marker.module';

@Module({
  imports: [DocumentModule, MarkerModule],
  providers: [PrismaService],
})
export class AppModule {}
