import axios from 'axios'
import { OrderDetails, OrdersList } from 'interface/sampleOrders'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './orderModal.styles.scss'

interface OrderI {

    /*
     "_id": "6300f18f0938f3bf045a2095",
            "name": "Update1",
            "price": 151,
            "image": "qowiejf1",
    */
    orderDetails: {
        _id: string,
        productId: any
//         {
//             _id: string,
//             name: string,
//             price: number,
//             image?:string
// }
        ,
        user: {
            name: string,
            email: string,
            address:any
        }
   }

    // products?: {
    //     _id: number | string
    //     title?: string
    //     image?: any
    //     description?: string
    //     price?: number
    // }[]
    // price?: number
    // user?: {
    //     name: string
    //     email: string
    //     address: string
    // }
    // purchadeDate?: Date
    params?: any
}

const OrdersModal = () => {

    const [details, setDetails] = useState<OrderI['orderDetails']>()

    // const date = new Date()
    // date.toUTCString()
    const { id } = useParams<OrderI['params']>()
    // const orderDetails = OrderDetails.find((d) => d.id === id)

    async function findOneOrder() {
        try {
            const response = await axios.get(`http://localhost:3001/api/1.0.0/get/order/${id}`)
            setDetails(response.data.order)
            console.log("order data", response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    // const productType = Array.isArray(details?.productId)
    // console.log(productType)
    // {(productType === true){}}

    useEffect(() => {
        findOneOrder()
    }, [])
    return (
        <div className='madal-main-container'>
            <div className="content-container">
                <div className="product-detail">
                {details?.productId.map((p:any,i:any)=>
                        <div className="product">
                            <span>{ p.name}</span>
                            <span>Image: { p.name}</span>
                        </div>
                    )}
                </div>
                <div className="user-detail">
                    <span>Name:{ details?.user?.name}</span>
                    <span>Email:{ details?.user?.email}</span>
                    <span>Address:{ details?.user?.address}</span>
                </div>
            </div>
        </div>
    )
}
export default OrdersModal
