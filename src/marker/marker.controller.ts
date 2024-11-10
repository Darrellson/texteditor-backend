import { Controller, Get, Post, Body } from '@nestjs/common';
import { MarkerService } from './marker.service';

@Controller('markers')
export class MarkerController {
  constructor(private markerService: MarkerService) {}

  @Post()
  async createMarker(@Body() body: { latitude: number; longitude: number }) {
    return this.markerService.createMarker(body.latitude, body.longitude);
  }

  @Get()
  async getMarkers() {
    return this.markerService.getMarkers();
  }
}
