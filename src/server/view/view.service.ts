import { Injectable } from '@nestjs/common';
import next from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class ViewService {
  private server: NextServer;

  async onModuleInit(): Promise<void> {
    try {
      this.server = next({ dev: true, dir: './src/client' });
      await this.server.prepare();
    } catch (error) {
      console.log(error);
    }
  }

  getNextServe(): NextServer {
    return this.server;
  }
}
