import React from 'react';
import './HorizontalBox.css'

const HorizontalBox= ({children}) => {
  return (
    <flex className='HorizontalBox'>
      {children}
    </flex>
  );
};

export default HorizontalBox;
