import Cart from 'components/cart/Cart.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Wishlist from 'components/wish-list/Wishlist.component'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavbarI } from '../../interface/Nav'
import './navbar.styles.scss'
import Dropdown from 'components/drop-down/Dropdown.component'

function Navbar() {
    const [show, setShow] = useState(false)

    const displayDropdown = () => {
        //    return <Dropdown/>
        console.log('hover')
    }

    // function showCorrctForm () {
    //   props.children.map(d => d.hover !== '' && d.name === 'Cart' ? <Cart/> : d.name === 'wishList' ? <Wishlist/> : setShow(false))
    // }
    // console.log(show)

    // props:NavbarI
    //  {props.children.map((d) => (
    //       <NavLink to={`/${d.navigate}`} className={`${d.cartIcon}? cart-icon: option`}>
    //         {d.name}
    //       </NavLink>
    //     ))}
    return (
        <>
            <div className="nav-container">
                <div className="logo-container">Logo</div>
                <div className="options-container">
                    <div className="option" onClick={() => setShow(!show)}>
                        Cart
                        <span className="cart-number">3</span>
                    </div>
                    <Link to="/wishlist" className="option cart-icon">
                        Home
                    </Link>
                    <Link to="/home" className="option">
                        wishlist
                    </Link>
                </div>
            </div>
            {show && <Dropdown />}
            {/* <div className='cart-number'>3</div> */}
        </>
    )
}

export default Navbar
