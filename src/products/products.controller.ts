import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
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

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productService.updateProduct(id, productData);

    return updatedProduct;
  }
}
