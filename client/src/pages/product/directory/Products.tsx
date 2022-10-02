
import { useEffect } from 'react'
import './product.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { SampleProduct } from '../../../interface/Nav'
import Listvew from '../list-view/Listvew'
import { fetchProducts } from 'features/product/productSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'

function Products() {

    const product = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    const content = (
        <div className="product-container">
            {product.products.map((p) => (
                <Listvew key={p.id} item={p} />
            ))}
            
        </div>
    )

    return content
}

export default Products
