import {Product} from './Product'

export class ProductRepository {
    private readonly products: { [key: string]: Product }

    constructor() {
        // Productos de ejemplo
        this.products = {
            P001: new Product('P001', 19.99, 100),
            P002: new Product('P002', 29.99, 50),
        }
    }

    getProductById(productId: string): Product | undefined {
        return this.products[productId]
    }
}