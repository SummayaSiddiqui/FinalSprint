import React, { useEffect } from "react";

const Notification = ({ message, onClose, className }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={className}>{message}</div>;
};

export default Notification;
