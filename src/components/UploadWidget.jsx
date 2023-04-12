import { Cloudinary } from "@cloudinary/url-gen";
import React, { useEffect, useState } from "react";
import CldGallery from "./CldGallery";

import ImageUpload from "./ImageUpload";

const UploadWidget = () => {
  const [imagesUploadedList, setImagesUploadedList] = useState([]);

  const cld = new Cloudinary({
    cloud: {
      cloud_name: "dcyauywtv", //Your cloud name
      upload_preset: "s2q6pyzk", //Create an unsigned upload preset and update this
    },
  });

  const onImageUploadHandler = (publicId) => {
    setImagesUploadedList((prevState) => [...prevState, publicId]);
  };

  return (
    <div>
      <ImageUpload
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
        upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
        onImageUpload={(publicId) => onImageUploadHandler(publicId)}
      />

      <CldGallery
        imagesUploaded={imagesUploadedList}
        {...cld}
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
      />
    </div>
  );
};

export default UploadWidget;
