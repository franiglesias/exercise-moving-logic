import {OrderItem} from './OrderItem'

export class Order {
    private readonly id: string
    private readonly items: OrderItem[]
    private status: string
    private readonly totalAmount: number
    private readonly createdAt: Date

    constructor(id: string, items: OrderItem[], totalAmount: number) {
        this.id = id
        this.items = items
        this.status = 'pending'
        this.totalAmount = totalAmount
        this.createdAt = new Date()
    }

    getId(): string {
        return this.id
    }

    getItems(): OrderItem[] {
        return this.items
    }

    getStatus(): string {
        return this.status
    }

    setStatus(status: string): void {
        this.status = status
    }

    getTotalAmount(): number {
        return this.totalAmount
    }

    getCreatedAt(): Date {
        return this.createdAt
    }
}