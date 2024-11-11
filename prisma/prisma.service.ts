import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaService class extends PrismaClient and is used to manage
 * database connections with Prisma in a NestJS application.
 * 
 * @extends PrismaClient - Inherits all methods and properties from PrismaClient,
 *                         allowing direct interaction with the database.
 * 
 * @implements OnModuleInit - A NestJS lifecycle interface that requires implementing
 *                            the onModuleInit method, used for actions to perform
 *                            when the module is initialized.
 * 
 * @implements OnModuleDestroy - A NestJS lifecycle interface that requires implementing
 *                               the onModuleDestroy method, used for actions to perform
 *                               when the module is destroyed.
 */
@Injectable() // Marks this class as a provider that can be injected into other classes
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  /**
   * Lifecycle hook that is called when the module initializes.
   * Establishes a connection to the database by calling Prisma's $connect() method.
   * 
   * @returns Promise<void>
   */
  async onModuleInit() {
    await this.$connect(); // Connect to the database
  }

  /**
   * Lifecycle hook that is called when the module is destroyed.
   * Closes the database connection by calling Prisma's $disconnect() method.
   * 
   * @returns Promise<void>
   */
  async onModuleDestroy() {
    await this.$disconnect(); // Disconnect from the database
  }
}
