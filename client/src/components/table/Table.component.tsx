import BasicTable from 'components/basic-table/BasicTable.component'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowCircleDown } from 'react-icons/fa'
import './table.styles.scss'
import Dropdown from 'components/drop-down/Dropdown.component'

interface TableI {
    orderid: any
    price?: any
    status?: any
    user?: any
    tableData: {
        _id: string
        deliverdStatus: true | false
        price?: any
        userId?: any
    }[]
}

const Table = (props: TableI) => {
    const [transport, setTransport] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="main-table-container">
            <table className="table-content-container">
                <thead>
                    <tr className="table-header">
                        <th className="header-content">#</th>
                        <th className="header-content">{props.orderid}</th>
                        <th className="header-content">{props.status}</th>
                        <th className="header-content">{props.price}</th>
                        <th className="header-content">{props.user}</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {props.tableData?.map((d, i) => (
                        <tr key={i} className="tbody-tr">
                            <td className="table-content">{i + 1}</td>
                            <td className="table-content" onClick={()=> navigate('/order/details/${d._id}')}>{d._id}</td>
                            <td className="table-content">
                                {d.deliverdStatus === false
                                    ? 'pending'
                                    : 'deliverd'}
                            </td>
                            <td className="table-content">{d.price}</td>
                            <td className="table-content">{d.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
