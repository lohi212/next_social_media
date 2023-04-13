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
      profile: {
        username: "",
        image: "",
      },
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
          width={50}
          height={50}
        />
        <Input
          ref={inputRef}
          className="ant-input-search "
          placeholder="Start a post"
          onFocus={handleAdd}
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
        <Input.TextArea
          value={value}
          className="mb-10"
          placeholder="Enter caption"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
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
