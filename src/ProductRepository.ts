import {Product} from './Product'

export class ProductRepository {
    private readonly products: { [key: string]: Product }

    constructor(products: { [p: string]: Product }) {
        this.products = products
    }

    getProductById(productId: string): Product | undefined {
        return this.products[productId]
    }
}