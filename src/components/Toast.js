import React, { useState, useEffect } from 'react';

function Toast({ message, type, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 7000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="container">
      <div className="box form-box">
        <div className={`toast ${type} ${show ? 'show' : ''}`}></div>
        <div className="toast-body">{message}</div>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">X</span>
      </button>
    </div>
  );
}

export default Toast;
