import React from 'react';
import './HorizontalLogo.css'
import HorizontalBox from '../HorizontalBox/HorizontalBox';
import Logo from '../../assets/Logo.png'

const HorizontalLogo= () => {
  return (
    <HorizontalBox style={{alignItens:"center",justifyContent:"center"}}>
        <img className='HorizontalLogo' src={Logo}/>
        <h1 className='LogoHorizontalTitle'>SciNav</h1>
    </HorizontalBox>
  );
};

export default HorizontalLogo;
