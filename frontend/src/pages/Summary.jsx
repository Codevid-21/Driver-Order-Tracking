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

  return (
    <>
      <div className="summary__container">
        <div className="summary__day">
          <h4> `Toplam Kac Siparis Götürüldü?? : 5`</h4>
          <h4> `Toplam Kac Söför calisti?? : 3`</h4>
          <h4> `Toplam Kac Para toplandi?? : 500`</h4>
        </div>

        <div className="summary__drivers">
          <div className="drivers__endDayCard">
            {drivers.map((driver, i) => {
              return (
                <div className="card__items">
                  <p>
                    {driver.user.name} {console.log(driver.deliveries)}{" "}
                  </p>
                  <p>
                    {`Toplam Siparis Sayisi :  ${driver.deliveries.length}`}
                  </p>
                  Toplam Siparis Tutari :
                  {driver.deliveries.reduce(
                    (previousValue, currentValue) =>
                      previousValue + parseInt(currentValue.total),
                    0
                  )}
                  €<p></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
