import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, color, className }) => {
  return (
    <button className={`btn ${color} text-white ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: 'btn-blue'
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
