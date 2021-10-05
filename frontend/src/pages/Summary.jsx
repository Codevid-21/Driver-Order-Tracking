import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";

function Summary() {
  const [drivers, setDrivers] = useState([]);

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      const workedDrivers = result.filter(
        (value, index) => value.deliveries.length > 0
      );
      setDrivers(workedDrivers);
    });
  }, [url]);

  const showDetailsOfDriver = (driver, i) => {
    console.log(driver, i);
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
        <div className="summary__day">
          <h5>
            Toplam Kac Siparis Götürüldü?? :{" "}
            {drivers.reduce(
              (previousValue, currentValue) =>
                previousValue + parseInt(currentValue.deliveries.length),
              0
            )}
          </h5>
          <h5> Toplam Kac Söför calisti?? : {drivers.length} </h5>
          <h5> Toplam Kac Para toplandi?? : {dailyGiro()}€ </h5>
        </div>

        <div className="drivers__endDayCard">
          {drivers.map((driver, i) => {
            return (
              <div
                key={i}
                className="card__items"
                onClick={() => showDetailsOfDriver(driver, i)}
              >
                <h6>{driver.user.name}</h6>
                <p>Toplam Teslim Ettigi Siparis : {driver.deliveries.length}</p>
                Toplam Siparis Tutari :
                {driver.deliveries.reduce(
                  (previousValue, currentValue) =>
                    previousValue + parseInt(currentValue._id.total),0)}
                €
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Summary;
