import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello', description: 'Mensagem de boas-vindas' })
  @ApiOkResponse({
    description: 'O gato foi criado com sucesso.',
    type: String,
  })
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
