import React from 'react';
import './BodyCenter.css'

const BodyCenter= ({children}) => {
  return (
    <flex className='BodyCenter'>
      {children}
    </flex>
  );
};

export default BodyCenter;
