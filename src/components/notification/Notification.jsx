import React, { useEffect } from "react";

const Notification = ({ message, onClose, className, icon }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={className}>
      {icon} 
      <p>{message}</p>
    </div>
  );
};

export default Notification;
