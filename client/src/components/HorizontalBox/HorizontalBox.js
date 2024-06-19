import React from 'react';
import './HorizontalBox.css'

const HorizontalBox= ({props,children}) => {
  return (
    <flex {...props} className='HorizontalBox'>
      {children}
    </flex>
  );
};

export default HorizontalBox;
