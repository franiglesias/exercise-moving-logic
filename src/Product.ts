export class Product {
    private readonly id: string
    private readonly price: number
    private stockLevel: number

    constructor(id: string, price: number, stockLevel: number) {
        this.id = id
        this.price = price
        this.stockLevel = stockLevel
    }

    getId(): string {
        return this.id
    }

    getPrice(): number {
        return this.price
    }

    getStockLevel(): number {
        return this.stockLevel
    }

    setStockLevel(stockLevel: number): void {
        this.stockLevel = stockLevel
    }
}

