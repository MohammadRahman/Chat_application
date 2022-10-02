import Custombutton from 'components/button/Custombutton.component'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './dropdown.styles.scss'

const Dropdown = () => {
    const navigate = useNavigate()
    return (
        <div className="drop-down-container">
            <div className="content">
                <div className="product">product</div>
                <span className="price">price</span>
            </div>

            <Custombutton
                buttonType="checkout"
                buttonText="Checkout"
                onClick={() => navigate('/cart')}
            />
        </div>
    )
}

export default Dropdown
