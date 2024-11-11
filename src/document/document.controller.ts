import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DocumentService } from './document.service';

/**
 * DocumentController handles incoming HTTP requests for document-related
 * operations and delegates these requests to the DocumentService.
 *
 * @Controller('documents') - Specifies that this controller handles routes
 *                            prefixed with `/documents`.
 */
@Controller('documents')
export class DocumentController {
  /**
   * Injects an instance of DocumentService to handle business logic
   * for document operations.
   *
   * @param documentService - An instance of DocumentService.
   */
  constructor(private documentService: DocumentService) {}

  /**
   * Handles the creation of a new document.
   *
   * @Post() - Maps this method to POST requests to `/documents`.
   *
   * @param data - The document data provided in the request body.
   *               Expects an object with `title` and `content` properties.
   *
   * @returns The newly created document, returned from DocumentService.
   */
  @Post()
  async createDocument(@Body() data: { title: string; content: string }) {
    return this.documentService.createDocument(data);
  }

  /**
   * Retrieves all documents.
   *
   * @Get() - Maps this method to GET requests to `/documents`.
   *
   * @returns An array of documents, fetched from DocumentService.
   */
  @Get()
  async getDocuments() {
    return this.documentService.getDocuments();
  }

  /**
   * Retrieves a specific document by its ID.
   *
   * @Get(':id') - Maps this method to GET requests to `/documents/:id`.
   *
   * @param id - The unique identifier of the document, provided as a route parameter.
   *
   * @returns The document with the specified ID, returned from DocumentService.
   */
  @Get(':id')
  async getDocument(@Param('id') id: string) {
    return this.documentService.getDocument(Number(id));
  }
}
