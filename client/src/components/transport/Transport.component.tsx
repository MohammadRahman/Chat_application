import './transport.styles.scss'
import Table from 'components/table/Table.component'
import { AdminTableBody } from 'interface/sampleOrders'

const Transport = () => {
    const sendTrasnport = AdminTableBody.filter(
        (p) => p.deliverdStatus === false
    )
    console.log('from Transport', sendTrasnport)
    return (
        <div className="transport-main-container">
            <Table
                orderid="ORDER ID"
                user="USER"
                status="STATUS"
                price="PRICE"
                tableData={sendTrasnport}
            />
        </div>
    )
}

export default Transport
