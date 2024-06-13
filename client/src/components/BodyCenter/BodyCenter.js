import React from 'react';
import './BodyCenter.css'

const BodyCenter= ({child}) => {
  return (
    <flex className='BodyCenter'>
      {child}
    </flex>
  );
};

export default BodyCenter;
