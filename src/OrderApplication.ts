import {OrderService} from './OrderService'

/*
* OrderApplication is a wrapper to represent a real application,
* so the tests can be end-to-end, and hopefully you won't need to modify them.
*
* Feel free to modify the code inside OrderApplication methods, but don't touch the API
*
* */
export class OrderApplication {
    private readonly orderService: OrderService

    constructor(orderService: OrderService) {
        this.orderService = orderService
    }

    placeOrder(items: { productId: string; quantity: number }[]): {
        orderId: string;
        totalAmount: number;
        status: string
    } {
        const orderItems = items.map(item => ({
            getProductId: () => item.productId,
            getQuantity: () => item.quantity,
        }))

        const order = this.orderService.placeOrder(orderItems as any)

        return {
            orderId: order.getId(),
            totalAmount: order.getTotalAmount(),
            status: order.getStatus(),
        }
    }

    calculateTotal(items: { productId: string; quantity: number }[]): number {
        const orderItems = items.map(item => ({
            getProductId: () => item.productId,
            getQuantity: () => item.quantity,
        }))

        return this.orderService.calculateTotal(orderItems as any)
    }

    validateStock(items: { productId: string; quantity: number }[]): boolean {
        const orderItems = items.map(item => ({
            getProductId: () => item.productId,
            getQuantity: () => item.quantity,
        }))

        return this.orderService.validateStock(orderItems as any)
    }

    shipOrder(orderId: string): void {
        this.orderService.shipOrder(orderId)
    }
}
