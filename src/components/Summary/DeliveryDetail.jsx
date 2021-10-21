import React from 'react'

function DeliveryDetail({driver}) {
    return (
        <table className="withClick" style={{ display: driver.show }}>
            <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Client Name</th>
                    <th>Client Address</th>
                    <th>Order Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {driver.deliveries.map((value, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}.</td>
                            <td>{value._id.customerId.user.name} {value._id.customerId.user.surname}</td>
                            <td>{value._id.customerId.user.address}</td>
                            <td>{value._id.date}</td>
                            <td>{value._id.total}€</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}

export default DeliveryDetail
