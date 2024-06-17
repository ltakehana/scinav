import React from 'react';
import './VerticalLogo.css'
import VerticalBox from '../VerticalBox/VerticalBox';
import Logo from '../../assets/Logo.png'

const VerticalLogo= () => {
  return (
    <VerticalBox>
        <img className='VerticalLogo' src={Logo}/>
        <h1 className='LogoVerticalTitle'>SciNav</h1>
    </VerticalBox>
  );
};

export default VerticalLogo;
