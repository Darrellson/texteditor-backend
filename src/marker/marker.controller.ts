import { Controller, Get, Post, Body } from '@nestjs/common';
import { MarkerService } from './marker.service';

/**
 * MarkerController handles HTTP requests related to markers, such as
 * creating new markers and retrieving all markers.
 * 
 * @Controller('markers') - Specifies that this controller manages routes
 *                          prefixed with `/markers`.
 */
@Controller('markers')
export class MarkerController {
  /**
   * Injects an instance of MarkerService to handle the business logic
   * for marker-related operations.
   *
   * @param markerService - An instance of MarkerService.
   */
  constructor(private markerService: MarkerService) {}

  /**
   * Handles the creation of a new marker with specified latitude and longitude.
   * 
   * @Post() - Maps this method to POST requests to `/markers`.
   * 
   * @param body - The data from the request body, containing `latitude` and `longitude`.
   * 
   * @returns The newly created marker, returned from MarkerService.
   */
  @Post()
  async createMarker(@Body() body: { latitude: number; longitude: number }) {
    return this.markerService.createMarker(body.latitude, body.longitude);
  }

  /**
   * Retrieves all markers from the service.
   * 
   * @Get() - Maps this method to GET requests to `/markers`.
   * 
   * @returns An array of markers, fetched from MarkerService.
   */
  @Get()
  async getMarkers() {
    return this.markerService.getMarkers();
  }
}
