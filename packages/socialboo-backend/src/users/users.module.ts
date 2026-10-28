import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';

@Module({
  controllers: [UsersController], // O controller deve ser declarado aqui
})
export class UsersModule {}