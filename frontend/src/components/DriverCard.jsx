import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";

function DriverCard({ driver, key, addDrivertoOrder }) {
    return (
        <div
            className="driverCard"
            key={key}
            onClick={() => addDrivertoOrder(driver)}
        >
            <div className="driverPhoto">
                <BsFillPersonFill size="2em" color="black" />
            </div>
            <div className="info">
                <p>Name : {driver.user.name} </p>
                <p>Status : {driver.status} </p>
            </div>
        </div>

    )
}

export default DriverCard
