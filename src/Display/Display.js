import React from "react";

const Display = ({ caption }) =>
  <div className="text-right" style={ { color: 'fff' } }>
    <h1>{caption}</h1>
  </div>;

export default Display;