import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";
import onTheWay from "../components/onTheWay.svg";
import money from "../components/money.svg";

function Summary() {
  const [drivers, setDrivers] = useState([]);

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      const workedDrivers = result.filter((value, index) => {
        value.show = "none";
        return value.deliveries.length > 0;
      });
      setDrivers(workedDrivers);
    });
  }, [url]);

  const showDetailsOfDriver = (driver, i) => {
    // console.log(driver, i);

    driver.show = driver.show === "none" ? "block" : "none";
    const newDrivers = [...drivers];
    setDrivers(newDrivers);
  };

  const dailyGiro = () => {
    return drivers.reduce((total, driver) => {
      let subtotal = driver.deliveries.reduce((total, delivery) => {
        return parseInt(delivery._id.total) + total;
      }, 0);
      return subtotal + total;
    }, 0);
  };

  return (
    <>
      <div className="summary__container">
        <h2>All Activities for Today</h2>

        {/* General Info */}
        <div className="summary__day">
          <div className="svgImg">
            <img src={onTheWay} alt="" />
          </div>

          <div className="day__info">
            <div className="totalOrders">
              <h5>Total Delivered Orders</h5>
              <p>
                {drivers.reduce(
                  (previousValue, currentValue) =>
                    previousValue + parseInt(currentValue.deliveries.length),
                  0
                )}
              </p>
            </div>
            <div className="totalDrivers">
              <h5> Total Number of Drivers </h5>
              <p>{drivers.length}</p>
            </div>
            <div className="totalMoney">
              <h5> Total Earnings : </h5>
              <p>{dailyGiro()}€</p>
            </div>
          </div>

          <div className="svgImg">
            <img src={money} alt="" />
          </div>
        </div>

        {/* Driver List */}
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

                <div className="withClick" style={{ display: driver.show }}>
                  {console.log(drivers)}
                  <div className="orderDetailsOfDrive">
                    {driver.deliveries.map((value) =>
                      value._id.foods.map((cafer, i) => (
                        <p>
                          {i + 1} {cafer.name}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Summary;
