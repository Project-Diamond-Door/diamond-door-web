export default {
    fulfillments: [{
        _id: 1,
        orderId: 1,
        user: {
            name: 'Taylor'
        },
        carrier: 'UPS',
        trackingNumber: '1Z999AA10123456784',
        isShipped: true,
        shippedAt: '02/21/2021',
    },
    {
        _id: 2,
        orderId: 2,
        user: {
            name: 'Pedro'
        },
        carrier: 'FedEx',
        trackingNumber: '',
        isShipped: false,
        shippedAt: '',
    },
    {
        _id: 3,
        orderId: 3,
        user: {
            name: 'Sanjay'
        },
        carrier: 'USPS',
        trackingNumber: '9400111899223856928499',
        isShipped: true,
        shippedAt: '02/22/2021',
    },
    {
        _id: 4,
        orderId: 4,
        user: {
            name: 'Maria'
        },
        carrier: 'UPS',
        trackingNumber: '',
        isShipped: false,
        shippedAt: '',
    }]
}
