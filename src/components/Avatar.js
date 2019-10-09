import React from 'react';
import './Avatar.css';

function Avatar({image, firstName, lastName}) {
  return (
    <div className="Avatar">
        <img src={image}/>
        <h4>{firstName} {lastName}</h4>
    </div>
  );
}

export default Avatar;
