import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Document } from '@prisma/client';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async createDocument(data: {
    title: string;
    content: string;
  }): Promise<Document> {
    return this.prisma.document.create({ data });
  }

  async getDocuments(): Promise<Document[]> {
    return this.prisma.document.findMany();
  }

  async getDocument(id: number): Promise<Document | null> {
    return this.prisma.document.findUnique({ where: { id } });
  }
}
