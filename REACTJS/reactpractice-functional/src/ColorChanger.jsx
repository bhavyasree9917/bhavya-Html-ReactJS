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
        
        }}
      ></div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;