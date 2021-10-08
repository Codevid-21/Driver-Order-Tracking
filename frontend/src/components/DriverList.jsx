import React from 'react'
import DeliveryDetail from "../components/DeliveryDetail.jsx";
function DriverList({ drivers, setDrivers }) {

    const showDetailsOfDriver = (driver, i) => {
        driver.show = driver.show === "none" ? "block" : "none";
        const newDrivers = [...drivers];
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

                        <DeliveryDetail driver={driver} />
                    </div>
                );
            })}
        </div>

    )
}

export default DriverList
