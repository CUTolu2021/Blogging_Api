import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello this is a blog api with all the necessary routes!. Make sure you look at the readme file before you start';
  }
}
