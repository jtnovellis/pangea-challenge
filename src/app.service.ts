import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Pangea Backend Challenge go to /docs endpoint to see the documentation';
  }
}
