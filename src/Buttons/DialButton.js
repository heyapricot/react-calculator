import React from 'react';

const DialButton = ({ caption, onClick, className }) =>
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {caption}
    </button>;

DialButton.defaultProps = {
  className: "btn btn-info btn-lg"
};

export default DialButton;