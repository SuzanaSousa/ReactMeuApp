import React from 'react';

const Display = ({ value }) => {
  

return (
    <input
      type="text"
      className="visor visor-centro"
      value={value}
      readOnly
    />
  );
};

export default Display;