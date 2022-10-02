import React, { useEffect } from 'react'
import { SampleProduct } from 'interface/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import './productModal.styles.scss'
import Custombutton from 'components/button/Custombutton.component'

interface ProductMdalI {
    id?: number | string
    title?: string
    image?: any
    description?: string
    price?: number
    params?: any
}
const ProductModal = (props: ProductMdalI) => {
    const { id } = useParams<ProductMdalI['params']>()
    const navigate = useNavigate()

    const product = SampleProduct.find((p) => p.id === Number(id))

    return (
        <div className="product-modal-main-container">
            <div className="product-container">
                <div className="product-image">
                    <img
                        className="image"
                        width="240px"
                        height="270px"
                        src={`${product?.image}`}
                    />
                </div>
                <div className="product-description">
                    <h2>{product?.title}</h2>
                    <p>{product?.description}</p>
                </div>
                <Custombutton
                    buttonText="Go back"
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    )
}

export default ProductModal
