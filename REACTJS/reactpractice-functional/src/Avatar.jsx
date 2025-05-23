import React from 'react';


const Avatar = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
      />
    </div>
  );
};


Avatar.defaultProps = {
  imageUrl: 'https://via.placeholder.com/150'
};

export default Avatar;