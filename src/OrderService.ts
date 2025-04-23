import {ProductRepository} from './ProductRepository'
import {Order} from './Order'
import {OrderItem} from './OrderItem'

export class OrderService {
    private readonly productRepository: ProductRepository

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository
    }

    calculateTotal(items: OrderItem[]): number {
        return items.reduce((total, item) => {
            const product = this.productRepository.getProductById(item.getProductId())
            if (!product) {
                throw new Error(`Product with ID ${item.getProductId()} not found`)
            }
            return total + (product.getPrice() * item.getQuantity())
        }, 0)
    }

    validateOrder(order: Order): boolean {
        return order.getItems().length > 0 &&
            order.getTotalAmount() === this.calculateTotal(order.getItems())
    }

    validateStock(items: OrderItem[]): boolean {
        return items.every(item => {
            const product = this.productRepository.getProductById(item.getProductId())
            if (!product) {
                throw new Error(`Product with ID ${item.getProductId()} not found`)
            }
            return product.getStockLevel() >= item.getQuantity()
        })
    }

    placeOrder(items: OrderItem[]): Order {
        const orderId = Math.random().toString(36).substr(2, 9)
        const totalAmount = this.calculateTotal(items)
        const order = new Order(orderId, items, totalAmount)

        if (!this.validateOrder(order)) {
            throw new Error('Invalid order')
        }

        if (!this.validateStock(items)) {
            throw new Error('Insufficient stock')
        }

        return order
    }

    shipOrder(orderId: string): void {
        console.log(`Shipping order ${orderId}`)
    }
}