import { Button, Modal } from "antd";
import React, { useState } from "react";

const AddPost = ({ handleAddPost }) => {
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        {/* Add description */}
        {/* Upload Image widget */}
      </Modal>
    </div>
  );
};

export default AddPost;
