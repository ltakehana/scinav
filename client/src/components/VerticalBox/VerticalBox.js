import React from 'react';
import './VerticalBox.css'

const VerticalBox= ({props,children}) => {
  return (
    <flex {...props} className='VerticalBox'>
      {children}
    </flex>
  );
};

export default VerticalBox;
