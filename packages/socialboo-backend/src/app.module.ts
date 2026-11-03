import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { auth } from './db/auth.js';
import { OpenapiModule } from './api/api.module.js';
import { UsersModule } from './users/users.module.js';
import { validateEnv } from './app.env.js';
import z from 'zod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: () =>
        validateEnv(
          z.object({
            HOST: z.string().default('localhost'),
            PORT: z.coerce.number().default(8080),
            DATABASE_URL: z.string().min(1, { message: 'DATABASE_URL is required' }),
          }),
        ),
    }),
    AuthModule.forRoot({ auth }),
    OpenapiModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
