import React from 'react';

function HomepageImage() {
  const url = 'https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/69535165_154065889007241_8150727383596861305_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=109&_nc_ohc=ke0bsHOi66MAX8uBKeh&oh=22c3a011da61b774fefbc3b7a4f5a344&oe=5E884892';
  return (
    <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' />
  );
}

export default HomepageImage;