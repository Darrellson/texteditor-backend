import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Marker } from '@prisma/client';

/**
 * MarkerService provides methods to interact with the database
 * for marker-related operations, utilizing Prisma to perform
 * CRUD operations on the Marker model.
 * 
 * @Injectable() - Marks this class as a provider that can be injected
 *                 into other classes, such as controllers, to handle
 *                 marker-related data interactions.
 */
@Injectable()
export class MarkerService {
  /**
   * Injects PrismaService to handle database operations.
   *
   * @param prisma - An instance of PrismaService used to interact with the database.
   */
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new marker in the database with the specified latitude and longitude.
   * 
   * @param latitude - The latitude of the marker's location.
   * @param longitude - The longitude of the marker's location.
   * 
   * @returns A Promise that resolves to the created Marker object.
   */
  async createMarker(latitude: number, longitude: number): Promise<Marker> {
    return this.prisma.marker.create({ data: { latitude, longitude } });
  }

  /**
   * Retrieves all markers from the database.
   * 
   * @returns A Promise that resolves to an array of Marker objects.
   */
  async getMarkers(): Promise<Marker[]> {
    return this.prisma.marker.findMany();
  }
}
