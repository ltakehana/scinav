import React from 'react';
import './Label.css'

const Label= ({props,children}) => {
  return (
    <label {...props} className='Label'>
      {children}
    </label>
  );
};

export default Label;
