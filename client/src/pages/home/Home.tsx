import React from 'react'
import './home.styles.scss'
import Navbar from '../../components/navbar/Navbar.component'
import { PublicNav } from '../../interface/Nav'

import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/side-bar/Sidebar'
import Products from '../product/directory/Products'

function Home() {
    return (
        <section>
            <header>
                {/* <Navbar children={PublicNav}/> */}
                <Navbar />
            </header>
            <main className="main-body-container">
                <Sidebar />
                <Products />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Home
