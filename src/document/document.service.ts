import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Document } from '@prisma/client';

/**
 * DocumentService provides methods to interact with the database
 * for document-related operations, utilizing Prisma to perform
 * CRUD operations on the Document model.
 * 
 * @Injectable() - Marks this class as a provider that can be injected
 *                 into other classes, such as controllers, to handle
 *                 document-related data interactions.
 */
@Injectable()
export class DocumentService {
  /**
   * Injects PrismaService to handle database operations.
   *
   * @param prisma - An instance of PrismaService used to interact with the database.
   */
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new document in the database.
   * 
   * @param data - An object containing the document details, specifically `title` and `content`.
   * 
   * @returns A Promise that resolves to the created Document object.
   */
  async createDocument(data: { title: string; content: string }): Promise<Document> {
    return this.prisma.document.create({ data });
  }

  /**
   * Retrieves all documents from the database.
   * 
   * @returns A Promise that resolves to an array of Document objects.
   */
  async getDocuments(): Promise<Document[]> {
    return this.prisma.document.findMany();
  }

  /**
   * Retrieves a single document by its unique ID.
   * 
   * @param id - The unique identifier of the document.
   * 
   * @returns A Promise that resolves to the Document object if found, or null if not found.
   */
  async getDocument(id: number): Promise<Document | null> {
    return this.prisma.document.findUnique({ where: { id } });
  }
}
