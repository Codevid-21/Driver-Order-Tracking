import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

function NewDriverAvatar({ setSelectedImg, preview, setPreview }) {

  const onImageChange = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setPreview(url);
    setSelectedImg(event.target.files[0]);
  };

  return (
    <div className="container">
      <div className="avatar-upload">
        <div className="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={onImageChange}
          />
          <label htmlFor="imageUpload">
            <FiUpload fontSize="20px" />
          </label>
        </div>

        <div className="avatar-preview">
          <div id="imagePreview">
            <img src={preview ?? "/images/avatar.jpeg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDriverAvatar;
