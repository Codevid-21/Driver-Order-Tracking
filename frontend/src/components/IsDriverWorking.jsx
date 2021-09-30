import React from "react";

function IsDriverWorking({ drivers, isWorking }) {
  const handleWorkingSituation = (value) => {
   

    const url = `http://localhost:2005/drivers/${value._id}`;
    const options = {
      method: "PUT",
      body : JSON.stringify({...value, isWorking : !isWorking}),
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => console.log("Güncellenmis Driver", result));

  };

  console.log(drivers);

  return (
    <>
      <div className="workingDrivers">
        <div className="workingDrivers__card">
          <div className="header">
            <h2>{isWorking ? "Working" : "Not Working"} Drivers</h2>
          </div>
          <div className="workingDrivers__info">
            {drivers
              .filter((driver, i) => {
                return driver.isWorking === isWorking;
              })
              .map((value, i) => {
                return (
                  <p key={i} onClick={() => handleWorkingSituation(value)}>
                    {value.user.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default IsDriverWorking;
