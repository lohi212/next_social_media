import { openUploadWidget } from "@/utils";
import { Button } from "antd";
import { useState } from "react";

const ImageUpload = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadImageWidget = () => {
    setIsLoading(true);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: props.cloud_name,
        uploadPreset: props.upload_preset,
        tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info.public_id);
        }
      }
    );
    setIsLoading(false);
    myUploadWidget.open();
  };

  return (
    <Button onClick={uploadImageWidget} loading={isLoading} className="mb-10">
      Upload Image
    </Button>
  );
};

export default ImageUpload;
