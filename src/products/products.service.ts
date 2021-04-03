import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
	private products: Product[] = [];

	addProduct(product: Product): Product {
		this.products.push(product);
		return product;
	}

	getProducts(): Product[] {
		return this.products;
	}
}
