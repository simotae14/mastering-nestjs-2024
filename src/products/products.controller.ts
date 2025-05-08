import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Post()
  addProducts(
    @Body('title') pTitle: string,
    @Body('desc') pDesc: string,
    @Body('price') pPrice: number,
  ): any {
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);

    return { id: returnedId };
  }
}
