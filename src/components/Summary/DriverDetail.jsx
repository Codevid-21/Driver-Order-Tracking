import React from 'react'

function DriverDetail({ driver }) {
    return (
        <div className="withoutClick">
            <div className="name">
                <h6>Driver Name</h6>
                <p>{driver.user.name}</p>
            </div>

            <div className="orders">
                <h6>Orders</h6>
                <p>{driver.deliveries.length}</p>
            </div>

            <div className="name">
                <h6>Will Pay</h6>
                <p>
                    {driver.deliveries.reduce(
                        (previousValue, currentValue) =>
                            previousValue + parseInt(currentValue._id.total),
                        0
                    )}
                    €
                </p>
            </div>
        </div>
    )
}

export default DriverDetail
