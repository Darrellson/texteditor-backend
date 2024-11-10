import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('documents')
export class DocumentController {
  constructor(private documentService: DocumentService) {}

  @Post()
  async createDocument(@Body() data: { title: string; content: string }) {
    return this.documentService.createDocument(data);
  }

  @Get()
  async getDocuments() {
    return this.documentService.getDocuments();
  }

  @Get(':id')
  async getDocument(@Param('id') id: string) {
    return this.documentService.getDocument(Number(id));
  }
}
