import { Button, Modal, Input } from "antd";
import React, { useState } from "react";
import UploadWidget from "./UploadWidget";

const AddPost = ({ handleAddPost }) => {
  const [open, setOpen] = useState(false);
  const [imagesUploadedList, setImagesUploadedList] = useState([]);

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImagesUploadedList([]);
  };

  return (
    <div>
      <Button onClick={handleAdd}>Add Post</Button>

      <Modal
        title="Create post"
        open={open}
        onOk={handleClose}
        onCancel={handleClose}
      >
        Username
        <Input.TextArea placeholder="Enter caption" />
        <UploadWidget
          setImagesUploadedList={setImagesUploadedList}
          imagesUploadedList={imagesUploadedList}
        />
        {/* Add description */}
        {/* Upload Image widget */}
      </Modal>
    </div>
  );
};

export default AddPost;
