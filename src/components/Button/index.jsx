import React from 'react';
import './button.scss';

const Button = ({
  name,
  onClick,
  disabled
}) => {
  return (
    <button
      type="button"
      className="action--btn"
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button;
