export class OrderItem {
    private readonly productId: string
    private quantity: number

    constructor(productId: string, quantity: number) {
        this.productId = productId
        this.quantity = quantity
    }

    getProductId(): string {
        return this.productId
    }

    getQuantity(): number {
        return this.quantity
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity
    }
}