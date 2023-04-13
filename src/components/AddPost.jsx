import { Button, Modal, Input, Card } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import UploadWidget from "./UploadWidget";

const AddPost = ({ handleAddPost }) => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [imagesUploadedList, setImagesUploadedList] = useState([]);

  const handleAdd = (e) => {
    setOpen(true);
    if (inputRef.current) inputRef.current.blur();
  };

  const handleClose = () => {
    setOpen(false);
    setImagesUploadedList([]);
  };

  const handlePost = () => {
    handleAddPost({
      caption: value,
      images: imagesUploadedList,
      // likes,
      // comments
      id: Date.now(),
    });
    handleClose();
  };

  return (
    <div>
      <Card
        bodyStyle={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          alt="profile_photo"
          className="rounded-[50%]"
          src="https://imgur.com/ffMnKlq.png"
          width={60}
          height={60}
        />
        <Input
          ref={inputRef}
          value={value}
          className="ant-input-search "
          placeholder="Start a post"
          onFocus={handleAdd}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Card>

      <Modal
        title="Create post"
        open={open}
        onCancel={handleClose}
        width="80%"
        okText="Post"
        onOk={handlePost}
        okButtonProps={{
          disabled: !value,
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <p>Username</p>
        <Input.TextArea placeholder="Enter caption" className="mb-10" />
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
