import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";

function SelectDrivers() {
  const [drivers, setDrivers] = useState([]);

  const url = `http://localhost:2005/drivers`;

  useEffect(() => {
    api.fetchDataFromDB(url).then((result) => {
      setDrivers(result);
    });
  }, [url]);

  return (
    <div className="allDrivers__container" >
      <div className="workingDrivers">
        <div className="workingDrivers__card">
          <div className="header">
            <h2>Working Drivers</h2>
          </div>
          <div className="workingDrivers__info">
            {drivers
              .filter((driver, i) => {
                return driver.isWorking === true;
              })
              .map((value,i) => {
                return <p key={i} >{value.user.name}</p>;
              })}
          </div>
        </div>
      </div>
      <div className="notWorkingDrivers">
        <div className="notWorkingDrivers__card">
          <div className="header">
            <h2>Not Working Drivers</h2>
          </div>
          <div className="workingDrivers__info">
            {drivers
              .filter((driver, i) => {
                return driver.isWorking === false;
              })
              .map((value,i) => {
                return <p key={i}  >{value.user.name}</p>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectDrivers;
