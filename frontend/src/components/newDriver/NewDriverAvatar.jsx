import React from "react";

function NewDriverAvatar({
  uploadedImg,
  setUploadedImg,
  setImgPreviewUrl,
  imgPreviewUrl,
}) {
  console.log(uploadedImg);
  return (
    <div class="container">
      <div class="avatar-upload">
        <div class="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => {
              setUploadedImg(e.target.files[0]);
            }}
          />
          <label for="imageUpload"></label>
        </div>

        <div class="avatar-preview">
          <div id="imagePreview">
            <img src={imgPreviewUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDriverAvatar;
