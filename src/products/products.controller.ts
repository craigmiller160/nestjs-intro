import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Post()
	addProduct(@Body() product: Product): Product {
		return this.productsService.addProduct(product);
	}

	@Get()
	getProducts(): Product[] {
		return this.productsService.getProducts();
	}

	@Get(':id')
	getProduct(@Param('id', ParseIntPipe) id: number): Product {
		// TODO return 204 if not found
		return this.productsService.getProduct(id);
	}

	@Put(':id')
	updateProduct(@Param('id', ParseIntPipe) id: number, @Body() product: Product): Product {
		// TODO return 204 if not found
		return this.productsService.updateProduct(id, product);
	}

	@Delete(':id')
	deleteProduct(@Param('id', ParseIntPipe) id: number): Product {
		// TODO return 204 if not found
		return this.productsService.deleteProduct(id);
	}
}
