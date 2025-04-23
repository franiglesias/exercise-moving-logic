import {beforeEach, describe, expect, test} from 'vitest'
import {OrderApplication} from '../src/OrderApplication'
import {OrderService} from '../src/OrderService'
import {ProductRepository} from '../src/ProductRepository'

describe('OrderApplication', () => {
    let orderApplication: OrderApplication

    beforeEach(() => {
        orderApplication = new OrderApplication(
            new OrderService(
                new ProductRepository(),
            ),
        )
    })

    test('should successfully create an order', () => {
        const items = [
            {productId: 'P001', quantity: 2},
            {productId: 'P002', quantity: 1},
        ]

        const order = orderApplication.placeOrder(items)

        expect(order).toMatchObject({
            orderId: expect.any(String),
            totalAmount: 2 * 19.99 + 1 * 29.99, // 69.97
            status: 'pending',
        })
    })

    test('should calculate correct total', () => {
        const items = [
            {productId: 'P001', quantity: 3}, // 3 * 19.99 = 59.97
            {productId: 'P002', quantity: 2},  // 2 * 29.99 = 59.98
        ]

        const total = orderApplication.calculateTotal(items)
        expect(total).toBeCloseTo(119.95, 2)
    })

    test('should validate stock correctly', () => {
        const validItems = [
            {productId: 'P001', quantity: 50}, // Stock is 100
            {productId: 'P002', quantity: 25},  // Stock is 50
        ]

        const invalidItems = [
            {productId: 'P001', quantity: 150}, // More than available stock
            {productId: 'P002', quantity: 1},
        ]

        expect(orderApplication.validateStock(validItems)).toBe(true)
        expect(orderApplication.validateStock(invalidItems)).toBe(false)
    })

    test('should throw error for invalid order', () => {
        const items: { productId: string; quantity: number }[] = [] // Empty items array should be invalid

        expect(() => orderApplication.placeOrder(items)).toThrow('Invalid order')
    })

    test('should throw error for insufficient stock', () => {
        const items = [
            {productId: 'P001', quantity: 200}, // Requesting more than available stock
            {productId: 'P002', quantity: 1},
        ]

        expect(() => orderApplication.placeOrder(items)).toThrow('Insufficient stock')
    })
})
