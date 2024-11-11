import { Module } from '@nestjs/common';

/**
 * MarkerModule is responsible for organizing and encapsulating
 * all components related to marker management in the application.
 * 
 * @Module() - A decorator that designates this class as a NestJS module,
 *             helping to structure the application by grouping related
 *             components, such as controllers and services, for marker-related functionality.
 * 
 * The empty `@Module()` decorator indicates that no components
 * (such as controllers or providers) are currently registered with this module.
 * Components related to marker management would typically be added here to complete
 * the module's setup.
 */
@Module({})
export class MarkerModule {}
