import React, { useState } from "react";
import NewDriverAvatar from "../components/newDriver/NewDriverAvatar";
import Axios from "axios";

function NewDriver() {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [imgPreviewUrl, setImgPreviewUrl] = useState(
    "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="
  );

  const [newDriversInfo, setNewDriversInfo] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    address: "",
    city: "",
  });

  const addANewDriver = (e) => {
    e.preventDefault();

    // fetch("http://localhost:2005/drivers", {
    //   method: "POST",
    //   body: JSON.stringify({ ...newDriversInfo }),
    //   headers: {
    //     "Content-type": "application/json", // The type of data you're sending
    //   },
    // });

    // setNewDriversInfo({
    //   name: "",
    //   surname: "",
    //   email: "",
    //   tel: "",
    //   address: "",
    //   city: "",
    // });

    // Upload an Image to Cloud

    const formData = new FormData();
    formData.append("file", uploadedImg);
    formData.append("upload_preset", "dmcrz5sg");

    Axios.post(
      "https://api.cloudinary.com/v1_1/driverandordertracking/image/upload",
      formData
    ).then((response) => {
      setImgPreviewUrl(response.data.url);
      console.log(response.data.url);
    });
  };

  return (
    <div className="newDriver__container">
      <form onSubmit={addANewDriver} autoComplete="off">
        <h2>Add a new Driver</h2>
        <NewDriverAvatar
          uploadedImg={uploadedImg}
          setUploadedImg={setUploadedImg}
          imgPreviewUrl={imgPreviewUrl}
          setImgPreviewUrl={setImgPreviewUrl}
        />
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
