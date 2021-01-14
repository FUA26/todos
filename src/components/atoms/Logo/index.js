import React from 'react';

const Logo = (props) => {
    const { src, ...other } = props
  return (
    <img
      alt="Logo"
      src={src}
      {...other}
    />
  );
};

export default Logo;
