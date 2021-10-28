export interface Details {
    productID: number,
    productName: string,
    quantity: number
}

export interface Order {
    name: string
    shippingAddress: string
    city: string
    date: string
    isDelivery: boolean
    id: number
}

export interface DetailsOrder {
    details: Details[]
    orderId: number
}