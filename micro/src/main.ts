import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('Main:bootstrap');
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      queue: 'users',
      url: 'nats://localhost:4222',
    },
  });
  app.listen();
}

bootstrap();
