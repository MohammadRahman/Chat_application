import BasicTable from 'components/basic-table/BasicTable.component'
import React from 'react'
import './shipping.styles.scss'

interface ShippingI {
    shippingDetails?: {
        id: string
        user: {
            name: string
            email: string
            address: string
        }
        products: {
            id: string
            title: string
            description: string
            image: string
            price: number
        }[]
        status: boolean
        price?: number
    }
    orderTable: {
        id: string
        products: string
        user: string
        status: boolean
    }[]
}

const Shipping = (props: ShippingI) => {
    return (
        <div className="shipping-main-container">
            <BasicTable properties={props.orderTable} />
        </div>
    )
}

export default Shipping
