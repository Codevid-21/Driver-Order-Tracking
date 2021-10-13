import React, { useState, useRef } from "react";
import NewDriverAvatar from "../components/newDriver/NewDriverAvatar";
import Axios from "axios";

const INITIAL_DRIVER = {
  name: "",
  surname: "",
  email: "",
  tel: "",
  address: "",
  city: "",
};

function NewDriver() {
  const [selectedImg, setSelectedImg] = useState(null); // Image that user selected (local)
  const [newDriversInfo, setNewDriversInfo] = useState(INITIAL_DRIVER);
  const imgRef = useRef(null); // URL from Cloudinary

  const uploadImg = (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "dmcrz5sg");

    return Axios.post(
      "https://api.cloudinary.com/v1_1/driverandordertracking/image/upload",
      formData
    );
  };

  const addDriver = async (e) => {
    e.preventDefault();
    const isFieldsMissing = Object.keys(INITIAL_DRIVER).some((key) => newDriversInfo[key] === "");

    if (isFieldsMissing && !selectedImg) {
      alert("All fields are required.");
      return;
    }

    try {
      if (!imgRef.current) {
        imgRef.current = (await uploadImg(selectedImg)).data.url;
      }


      //Send all data to Database

      await fetch("http://localhost:2005/drivers", {
        method: "POST",
        body: JSON.stringify({ ...newDriversInfo, img: imgRef.current }),
        headers: {
          "Content-type": "application/json", // The type of data you're sending
        },
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="newDriver__container">
      <form onSubmit={addDriver} autoComplete="off">
        <h2>Add a new Driver</h2>
        <NewDriverAvatar onImageSelect={setSelectedImg} />
        <label>
          <input
            placeholder=" Name..."
            type="text"
            name="name"
            value={newDriversInfo.name}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, name: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Surname..."
            type="text"
            name="surname"
            value={newDriversInfo.surname}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, surname: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Email..."
            type="email"
            name="email"
            value={newDriversInfo.email}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, email: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Telephone..."
            type="text"
            name="telefon"
            value={newDriversInfo.tel}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, tel: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Address..."
            type="text"
            name="adress"
            value={newDriversInfo.address}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, address: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="City..."
            type="text"
            name="city"
            value={newDriversInfo.city}
            onChange={(e) =>
              setNewDriversInfo({ ...newDriversInfo, city: e.target.value })
            }
          />
        </label>

        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default NewDriver;
