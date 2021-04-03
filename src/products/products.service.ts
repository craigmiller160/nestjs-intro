import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
	private readonly products: Product[] = [];
	private idCounter = 0;

	constructor() {
		this.products.push({
			id: ++this.idCounter,
			title: 'Original Product',
			description: 'A cool product',
			price: 10
		});
	}

	addProduct(product: Product): Product {
		product.id = ++this.idCounter;
		this.products.push(product);
		return product;
	}

	getProducts(): Product[] {
		return this.products.slice();
	}

	getProduct(id: number): Product {
		return this.products.find((product) => product.id === id);
	}

	updateProduct(id: number, product: Product): Product {
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

	deleteProduct(id: number): Product {
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
