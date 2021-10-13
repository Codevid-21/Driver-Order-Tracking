import React, { useState } from "react";

function NewDriverAvatar({ onImageSelect }) {
  const [file, setFile] = useState(null);

  const onImageChange = event => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFile(url);
    onImageSelect(event.target.files[0]);
  }

  return (
    <div class="container">
      <div class="avatar-upload">
        <div class="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={onImageChange}
          />
          <label for="imageUpload"></label>
        </div>

        <div class="avatar-preview">
          <div id="imagePreview">
            <img src={file ?? "/avatar.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDriverAvatar;
