import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductsService {
	private readonly products: Product[] = [];

	constructor() {
		this.products.push({
			id: nanoid(),
			title: 'Original Product',
			description: 'A cool product',
			price: 10
		});
	}

	addProduct(product: Product): Product {
		product.id = nanoid();
		this.products.push(product);
		return product;
	}

	getProducts(): Product[] {
		return this.products;
	}

	getProduct(id: string): Product {
		return this.products.find((product) => product.id === id);
	}

	updateProduct(id: string, product: Product): Product {
		product.id = id;
		const existingIndex = this.products.findIndex(
			(product) => product.id === id
		);
		if (existingIndex >= 0) {
			this.products[existingIndex] = product;
			return product;
		}
		return undefined;
	}

	deleteProduct(id: string): Product {
		const existingIndex = this.products.findIndex(
			(product) => product.id === id
		);
		if (existingIndex >= 0) {
			const existing = this.products[existingIndex];
			this.products.splice(existingIndex, 1);
			return existing;
		}
		return undefined;
	}
}
