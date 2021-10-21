import React from 'react'

function ClientInfo({ order }) {
    return (
        <div className="clientInfo">
            <h4>Client Information</h4>
            <p>Name: {order.customerId.user.name} {order.customerId.user.surname} </p>
            <p>Address: {order.customerId.user.address} </p>
            <p>Phone: {order.customerId.user.tel} </p>
        </div>
    )
}

export default ClientInfo
