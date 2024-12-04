import * as React from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ open = false, setOpen, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="close">
            <IoMdClose onClick={handleClose} />
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
