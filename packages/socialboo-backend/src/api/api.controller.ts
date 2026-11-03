import { Controller, Get } from '@nestjs/common';
import { auth } from '@/db/auth.js';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';

@Controller('api')
export class ApiController {
  @Get('authapi.json')
  @AllowAnonymous()
  async getAuthSchema() {
    return auth.api.generateOpenAPISchema();
  }
}
