import React from 'react';
import './Avatar.css';

function Avatar({image, firstName, lastName, star}) {
  return (
    <div className="Avatar">
      <div className={star ? "star":"star2" }>
        <img src = {image ?  image : 'https://www.drupal.org/files/issues/default-avatar.png'}/>
        <h4>{firstName} {lastName}</h4>
        </div>
    </div>
  );
}

export default Avatar;
