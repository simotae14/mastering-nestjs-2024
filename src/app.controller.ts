import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get(':id')
  fetchReq(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];

    return res.send(`
        <script>
            console.log("Id: ", "${id}");
            console.log("Query Params: ", ${JSON.stringify(queryParams)});
            console.log("User Agent: ", "${userAgent}");
        </script>    
    `);
  }
}
