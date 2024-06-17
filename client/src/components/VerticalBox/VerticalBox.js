import React from 'react';
import './VerticalBox.css'

const VerticalBox= ({children}) => {
  return (
    <flex className='VerticalBox'>
      {children}
    </flex>
  );
};

export default VerticalBox;
