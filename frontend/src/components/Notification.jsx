import React, { useMemo, useState } from "react";

const Notification = ({ message, value }) => {
  const [notify, setNotify] = useState(false);

  useMemo(() => {
    setNotify(!notify);
  }, [value]);

  return (
    <div
      onAnimationEnd={() => setNotify(false)}
      className={`notify ${notify ? "slide-in" : ""}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Notification;
