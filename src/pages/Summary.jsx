import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";
import AllDayInfo from "../components/Summary/AllDayInfo.jsx";
import DriverList from "../components/Summary/DriverList.jsx";
import dotenv from "dotenv";
dotenv.config();

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
      console.log("useeffect summary.jsx");
    });
  }, [url]);


  return (
    <div className="summary__container">
      <h2>All Activities for Today</h2>

      {/* General Info */}
      <AllDayInfo drivers={drivers} />

      {/* Driver List */}
      <DriverList drivers={drivers} setDrivers={setDrivers} />
    </div>
  );
}

export default Summary;
