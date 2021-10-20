import React from 'react';
import { GiHotMeal } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

function DriverInfo({ order, setModalShow, setSelectedOrder }) {
    
    const selectOrderFunc = () => {
        setModalShow(true);
        setSelectedOrder(order);
    }

    return (
        <div className="driverInfo" onClick={order.isDelivered ? () => null : selectOrderFunc}>
            <div className="img">
                {order.isDelivered ? (
                    <GrCompliance />
                ) : order.driver ? (
                    <FaShippingFast />
                ) : (
                    <GiHotMeal />
                )}
            </div>
            <p>
                {order.driver === null
                    ? "There is no driver yet!"
                    : `Driver: ${order.driver.user.name}`}
            </p>
        </div>
    )
}

export default DriverInfo
