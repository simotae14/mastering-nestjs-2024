import { Controller, Get, Header } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  @Header('Content-Type', 'text/html')
  getProducts(): any {
    return { message: 'Products Controller' };
  }
}
