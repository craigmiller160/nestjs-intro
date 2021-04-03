import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductsService {
	private products: Product[] = [];

	addProduct(product: Product): Product {
		product.id = nanoid();
		this.products.push(product);
		return product;
	}

	getProducts(): Product[] {
		return this.products;
	}
}
