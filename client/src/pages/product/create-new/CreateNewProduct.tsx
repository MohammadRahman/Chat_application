import React, { useState } from 'react'
import InputHandler from 'components/input-handler/InputHandler.component'
import './createProdcut.styles.scss'
import Custombutton from 'components/button/Custombutton.component'

interface ProductI {
    title: string
    price: number
    description: string
    image: string
    category: string
    subCategory: string
}

const initialValue = {
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    subCategory: '',
}

function CreateNewProduct() {
    const [createProductValues, setCreateProductValues] =
        useState<ProductI>(initialValue)

    const { title, price, description, image, category, subCategory } =
        createProductValues

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreateProductValues({
            ...createProductValues,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="main-product-create-container">
            <div className="create-product-form-container">
                <h2 className="header">Create Product</h2>
                <InputHandler
                    label="Title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChangeHandler}
                />
                <InputHandler
                    label="Price"
                    type="number"
                    name="price"
                    value={price}
                    onChange={onChangeHandler}
                />
                <InputHandler
                    label="Description"
                    type="text-area"
                    name="description"
                    value={description}
                    onChange={onChangeHandler}
                />
                <InputHandler
                    type="file"
                    name="image"
                    value={image}
                    onChange={onChangeHandler}
                />
                <InputHandler
                    label="Category"
                    type="text"
                    name="category"
                    value={category}
                    onChange={onChangeHandler}
                />
                <InputHandler
                    label="Sub-category"
                    type="text"
                    name="subCategory"
                    value={subCategory}
                    onChange={onChangeHandler}
                />
                <Custombutton
                    buttonType="submit"
                    buttonText="Create"
                    disabled={false}
                />
            </div>
        </div>
    )
}

export default CreateNewProduct
