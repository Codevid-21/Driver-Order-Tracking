import React, { useState, useRef } from "react";
import api from "../api/fetchDataFromDB";
import NewDriverAvatar from "../components/newDriver/NewDriverAvatar";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dotenv from "dotenv";
dotenv.config();

const INITIAL_USER = {
  name: "",
  surname: "",
  email: "",
  tel: "",
  address: "",
  city: "",
  type: "Staff",
};

function NewUser({ newUser }) {
  const [newUsersInfo, setNewUsersInfo] = useState(INITIAL_USER);
  const [selectedImg, setSelectedImg] = useState(null); // Image that user selected (local)
  const imgRef = useRef(null); // URL from Cloudinary
  const [password, setPassword] = useState("");
  const isUser = newUser.name === "User" ? true : false;

  const uploadImg = (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "dmcrz5sg");

    return Axios.post(
      "https://api.cloudinary.com/v1_1/driverandordertracking/image/upload",
      formData
    );
  };
  const addANewUser = async (e) => {
    e.preventDefault();
    const isFieldsMissing = Object.keys(INITIAL_USER).some(
      (key) => newUsersInfo[key] === ""
    );

    if (isUser && (isFieldsMissing || password === "")) {
      console.log("burasi mi");
      toast.error(" All fields are required...");
      return;
    } else if (!isUser && (isFieldsMissing || !selectedImg)) {
      console.log("burasi mi veya");
      toast.error(" All fields are required...");
      return;
    }

    try {
      const fetchUrl = newUser.name === "Driver" ? "drivers" : newUsersInfo.type === "Admin" ? "users/admin" : "users/register";
      const url = `${process.env.REACT_APP_API_SERVER}/${fetchUrl}`;
      
      if (!isUser && !imgRef.current) {
        imgRef.current = (await uploadImg(selectedImg)).data.url;
      }
      const body = isUser
        ? { ...newUsersInfo, password }
        : { ...newUsersInfo, img: imgRef.current };

      //Send all data to Database
      api.postDataFromDB(url, body).then((result) => {
        // isUser ?
        //   api.putDataFromDB(result.email)
        //   :
        console.log(result);
      });

      toast.success(`New ${newUser.name} added successfully..`);
    } catch (err) {
      console.log({ err });
    }

    if (isUser) {
      setNewUsersInfo(INITIAL_USER);
      setPassword("");
    } else {
      setNewUsersInfo(INITIAL_USER);
    }
  };

  return (
    <div className="newDriver__container">
      <form onSubmit={addANewUser} autoComplete="off">
        <h2>Add a new {newUser.name}</h2>
        {isUser ? (
          <div
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, type: e.target.value })
            }
          >
            User type:
            <input
              type="radio"
              value="Staff"
              name="newUser"
              defaultChecked
            />{" "}
            Staff
            <input type="radio" value="Admin" name="newUser" /> Admin
          </div>
        ) : (
          <NewDriverAvatar onImageSelect={setSelectedImg} />
        )}
        <label>
          <input
            placeholder=" Name..."
            type="text"
            name="name"
            value={newUsersInfo.name}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, name: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Surname..."
            type="text"
            name="surname"
            value={newUsersInfo.surname}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, surname: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Email..."
            type="email"
            name="email"
            value={newUsersInfo.email}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, email: e.target.value })
            }
          />
        </label>
        {isUser ? (
          <label>
            <input
              placeholder="Password..."
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        ) : null}
        <label>
          <input
            placeholder="Telephone..."
            type="text"
            name="telefon"
            value={newUsersInfo.tel}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, tel: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Address..."
            type="text"
            name="adress"
            value={newUsersInfo.address}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, address: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="City..."
            type="text"
            name="city"
            value={newUsersInfo.city}
            onChange={(e) =>
              setNewUsersInfo({ ...newUsersInfo, city: e.target.value })
            }
          />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
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
      />
    </div>
  );
}

export default NewUser;
