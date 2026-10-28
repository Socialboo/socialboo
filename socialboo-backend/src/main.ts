import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module.js';
import { env } from './app.env.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      bodyParser: false,
    },
  );

  const config = new DocumentBuilder()
    .setTitle('Socialboo API')
    .setDescription('The socialboo API description')
    .setVersion('1.0')
    .addTag('socialboo')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory, {
    jsonDocumentUrl: 'api/openapi.json',
    yamlDocumentUrl: 'api/openapi.yaml',
  });

  app.use(
    '/scalar',
    apiReference({
      content: documentFactory(),
      withFastify: true,
    }),
  );

  await app.listen(env.PORT, env.HOST);
}
await bootstrap();
