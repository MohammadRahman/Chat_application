import Custombutton from 'components/button/Custombutton.component'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
// import AiOutlineHeart from 'react-icons'
import './listview.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from '../../../features/counter/counterSlice'
// import { ItemI } from "../../../interface/Nav";

interface Props {
    item: {
        id: number
        name: string
        price: number
        image: string
        description: string
    }
}

function Listvew(props: Props) {
    const navigate = useNavigate()
    return (
        <div className="item-container" key={props.item.id}>
            {/* <img
                className="background-image"
                width="240px"
                height="270x"
                // style={{ backgroundImage: `url(${props.item.image})` }}
                src={`${props.item.image}`}
            /> */}
            <div
                className="background-image"
                style={{ backgroundImage: `url(${props.item.image})` }}
            />

            <div className="category-body-container">
                <FaHeart className="heart-icon" />
                <Custombutton
                    buttonText={`${props.item.name}`}
                    buttonType="product-details"
                    onClick={() =>
                        navigate(`/product/details/${props.item.id}`)
                    }
                />
                <Custombutton buttonText="add to cart" buttonType="addToCart"/>

                {/* </div> */}
            </div>
        </div>
    )
}

export default Listvew
