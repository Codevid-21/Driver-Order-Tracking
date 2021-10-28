import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function IsDriverWorking({
  drivers,
  isWorking,
  setDrivers,
  callTheDriversApi,
}) {
  const handleWorkingSituation = (value, i) => {
    // MAIN
    const url = `/drivers/${value._id}`;
    
    // DEV
    // const url = `http://localhost:2005/drivers/${value._id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify({ ...value, isWorking: !isWorking }),
      headers: {
        "Content-type": "application/json", // The type of data you're sending
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        drivers[i] = result;
        setDrivers(drivers);
        callTheDriversApi();
        toast.info(`${value.user.name}'s Work Status Changed... `);
      });
  };

  const filteredDrivers = drivers.filter(
    (driver) => driver.isWorking === isWorking
  );
  const lengthOfFilteredDrivers = filteredDrivers.length >= 1;
  return (
    <>
      <div className="workingDrivers">
        <div className="workingDrivers__card">
          <div className="header">
            <h2>
              {isWorking ? "Working" : "Not Working"} Drivers
            </h2>
          </div>
          <div className="workingDrivers__info">
            {lengthOfFilteredDrivers ? (
              filteredDrivers.map((value, i) => {
                return (
                  <p key={i} onClick={() => handleWorkingSituation(value, i)}>
                    {`${value.user.name} ${value.user.surname}`}
                  </p>
                );
              })
            ) : (
              <div>
                <span >No drivers are listed here.</span>
                <img src="./images/no_driver.svg" alt="no driver" />
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // limit={1}
      />
    </>
  );
}

export default IsDriverWorking;
