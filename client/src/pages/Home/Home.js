import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import BodyCenter from '../../components/BodyCenter/BodyCenter';
import HorizontalLogo from '../../components/HorizontalLogo/HorizontalLogo';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <BodyCenter>
        <HorizontalLogo></HorizontalLogo>
    </BodyCenter>
  );
};

export default Home;
