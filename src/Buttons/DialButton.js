import React from 'react';

const DialButton = ({ caption, onClick }) =>
    <button
      type="button"
      className="btn btn-info btn-lg"
      onClick={onClick}
    >
      {caption}
    </button>;

export default DialButton;