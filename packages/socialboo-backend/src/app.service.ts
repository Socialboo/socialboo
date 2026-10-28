import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { env } from '@/app.env.js';

@Injectable()
export class AppService {;
  constructor(private configService: ConfigService) {}
  
  getHello(): string {
    return env.HOST;
  }
}
