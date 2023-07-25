import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('*')
  static(@Req() req: Request, @Res() res: Response) {
    const handle = this.appService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}
