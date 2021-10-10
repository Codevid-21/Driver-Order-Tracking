import React from 'react'
import onTheWay from "../../components/onTheWay.svg";
import money from "../../components/money.svg";

export default function AllDayInfo({ drivers }) {

    const dailyGiro = () => {
        return drivers.reduce((total, driver) => {
            let subtotal = driver.deliveries.reduce((total, delivery) => {
                return parseInt(delivery._id.total) + total;
            }, 0);
            return subtotal + total;
        }, 0);
    };

    return (
        <div className="summary__day">
            <div className="svgImg ontheWay">
                <img src={onTheWay} alt="" />
            </div>

            <div className="day__info">
                <div className="totalOrders">
                    <h5>Total<br />Delivered Orders</h5>
                    <p>
                        {drivers.reduce(
                            (previousValue, currentValue) =>
                                previousValue + parseInt(currentValue.deliveries.length),
                            0
                        )}
                    </p>
                </div>
                <div className="totalDrivers">
                    <h5>Total<br />Number of Drivers</h5>
                    <p>{drivers.length}</p>
                </div>
                <div className="totalMoney">
                    <h5>Total<br />Earnings</h5>
                    <p>{dailyGiro()}€</p>
                </div>
            </div>

            <div className="svgImg money">
                <img src={money} alt="" />
            </div>
        </div>
    )
}
