import React, { useState } from 'react';

const ColorChanger = () => {

  const [bgColor, setBgColor] = useState('#ffffff');
  
  const handleChangeColor = () => {
    setBgColor("red");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: bgColor,
          width: '200px',
          height: '200px',
          marginBottom: '10px',
          border: '1px solid #000'
        }}
      ></div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;