import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
	getProduct(@Param('id') id: string): Product {
		// TODO return 204 if not found
		return this.productsService.getProduct(id);
	}

	updateProduct(id: string, @Body() product: Product): Product {
		// TODO return 204 if not found
		return this.productsService.updateProduct(id, product);
	}

	deleteProduct(id: string): Product {
		// TODO return 204 if not found
		return this.productsService.deleteProduct(id);
	}
}
