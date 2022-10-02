import axios from 'axios'
import Navbar from 'components/navbar/Navbar.component'
import Sidebar from 'components/side-bar/Sidebar'
import Table from 'components/table/Table.component'
import { AdminNav } from 'interface/Nav'
import { AdminTableBody } from 'interface/sampleOrders'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import './admin.styles.scss'



function Admin() {

    const [orders,setOrders] = useState([])
const [error, setError] = useState({})

    async function fetchOrderData() {
    try {
        const orders = await axios.get('http://localhost:3001/api/1.0.0/get/all/orders')
        console.log(orders)
       setOrders(orders.data)
    } catch (error:any) {
       setError(error)
    }
}





    useEffect(() => {
        fetchOrderData()
    },[])
    return (
        <>
            {/* <Navbar children={AdminNav}/> */}
            <Navbar />
            <div className="main-admin-container">
                <Sidebar />
                <Table
                    orderid="ORDER ID"
                    price="PRICE"
                    status="STATUS"
                    user="USER"
                    // tableData={AdminTableBody}
                    tableData={orders}
                />
            </div>
        </>
    )
}

export default Admin
