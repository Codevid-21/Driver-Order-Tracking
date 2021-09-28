import React, { useState, useEffect } from "react";

function SelectedDrivers({name, _id, checked, setChecked}) {


  return (
    <div>
      <form>
        <input
          type="checkbox"
          value={_id}
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="vehicle1"> {name} </label>
      </form>
    </div>
  );
}

export default SelectedDrivers;
