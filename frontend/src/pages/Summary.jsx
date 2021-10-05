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

  return (
    <>
      <div className="summary__container">
        <div className="summary__day">
          <h5> Toplam Kac Siparis Götürüldü?? : 5</h5>
          <h5> Toplam Kac Söför calisti?? : 3</h5>
          <h5> Toplam Kac Para toplandi?? : 500</h5>
        </div>

        <div className="drivers__endDayCard">
          {drivers.map((driver, i) => {
            return (
              <div
                className="card__items"
                onClick={() => showDetailsOfDriver(driver, i)}
              >
                <h6>
                  {driver.user.name} {console.log(driver.deliveries)}{" "}
                </h6>
                <p>Toplam Teslim Ettigi Siparis : {driver.deliveries.length}</p>
                Toplam Siparis Tutari :
                {driver.deliveries.reduce(
                  (previousValue, currentValue) =>
                    previousValue + parseInt(currentValue.total),
                  0
                )}
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
