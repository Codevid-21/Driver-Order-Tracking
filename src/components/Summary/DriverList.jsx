import React from 'react'
import DeliveryDetail from "./DeliveryDetail.jsx";
import DriverDetail from './DriverDetail.jsx';
import { io } from "socket.io-client";

function DriverList({ drivers, setDrivers }) {
    const showDetailsOfDriver = (driver, i) => {
        let socket = io();
        driver.show = driver.show === "none" ? "block" : "none";
        const newDrivers = [...drivers];
        socket.emit("driver", "was");
        setDrivers(newDrivers);
    };

    return (
        <div className="drivers__container">
            {drivers.map((driver, i) => {
                return (
                    <div
                        key={i}
                        className="card__items"
                        onClick={() => showDetailsOfDriver(driver, i)}
                    >
                        <DriverDetail driver={driver} />
                        <DeliveryDetail driver={driver} />
                    </div>
                );
            })}
        </div>
    )
}

export default DriverList
