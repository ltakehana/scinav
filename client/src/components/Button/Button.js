import React from 'react';
import './Button.css'

const Button= ({props,children,onClick}) => {
  return (
    <button {...props} onClick={onClick} className='Button'>
        {children}
    </button>
  );
};

export default Button;
