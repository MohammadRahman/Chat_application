import React from 'react'
import './table.styles.scss'

interface tableProps {
    // id?:any
    properties: {
        id: string
        products: string
        user: string
        status: boolean
    }[]
}

const BasicTable = (props: tableProps) => {
    const keys = Object.keys(props.properties[0])
    return (
        <table className="table-container">
            <thead className="table-header">
                <tr className="header-content">
                    {keys.map((d, i) => (
                        <th key={i}>{d}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="table-body">
                {props.properties?.map((obj: any, ind) => (
                    <tr key={ind} className="tbody-tr">
                        {keys.map((item: any, ind) => {
                            return (
                                <td key={ind} className="table-content">
                                    {obj[item]}
                                </td>
                            )
                        })}
                    </tr>
                ))}
                <tr></tr>
            </tbody>
        </table>
    )
}

export default BasicTable
