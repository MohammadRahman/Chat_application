import { Routes, Route } from 'react-router-dom'
import './App.css'
import CreateNewProduct from 'pages/product/create-new/CreateNewProduct'
import CartPage from 'pages/cart/CartPage'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Registration'
import Protect from './components/private/Protect'
import Navbar from './components/navbar/Navbar.component'
import Products from './pages/product/directory/Products'
import ProductModal from 'components/modal/ProductModal.component'
import Admin from 'pages/admin-screen/Admin'
import OrdersModal from 'components/modal/OrdersModal.component'
import Transport from 'components/transport/Transport.component'
import Shipping from 'components/shipping/Shipping.component'

function App() {
    const user = {
        email: 'mail@mail.com',
        name: 'name',
    }

    const initials = [
        {
            id: 'some ID',
            products: 'some products',
            user: 'some user',
            status: true,
        },
    ]
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="product/details/:id" element={<ProductModal />} />
                <Route path="/order/details/:id" element={<OrdersModal />} />
                <Route path="registration" element={<Register />} />
                <Route element={<Protect user={user} />}>
                    <Route path="orders" element={<Admin />} />
                    <Route
                        path="transport"
                        element={<Shipping orderTable={initials} />}
                    />
                    <Route path="pending-orders" element={<Transport />} />
                    <Route path="private" element={<CreateNewProduct />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
