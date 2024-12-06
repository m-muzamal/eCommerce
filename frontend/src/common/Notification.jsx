import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Notification({ message, severity }) {
  const [notification, setNotificatino] = useState(false);

  return (
    <div className="notification">
      <Stack sx={{ width: "20%" }} spacing={2}>
        {severity === "succeses" && (
          <Alert sx={{ fontSize: "1.5rem" }} severity="success">
            {message}
          </Alert>
        )}
        {severity === "info" && (
          <Alert sx={{ fontSize: "1.5rem" }} severity="info">
            {message}
          </Alert>
        )}
        {severity === "warning" && (
          <Alert sx={{ fontSize: "1.5rem" }} severity="warning">
            {message}
          </Alert>
        )}
        {severity === "error" && (
          <Alert sx={{ fontSize: "1.5rem" }} severity="error">
            {message}
          </Alert>
        )}
      </Stack>
    </div>
  );
}
