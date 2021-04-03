import { Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Post()
	addProduct(product: Product): Product {
		return this.productsService.addProduct(product);
	}

	@Get()
	getProducts(): Product[] {
		return this.productsService.getProducts();
	}
}
