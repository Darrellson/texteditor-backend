import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Marker } from '@prisma/client';

@Injectable()
export class MarkerService {
  constructor(private prisma: PrismaService) {}

  async createMarker(latitude: number, longitude: number): Promise<Marker> {
    return this.prisma.marker.create({ data: { latitude, longitude } });
  }

  async getMarkers(): Promise<Marker[]> {
    return this.prisma.marker.findMany();
  }
}
