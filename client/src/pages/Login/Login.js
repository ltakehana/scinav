import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import BodyCenter from '../../components/BodyCenter/BodyCenter';
import VerticalLogo from '../../components/VerticalLogo/VerticalLogo';
import Input from '../../components/Input/Input';
import VerticalBox from '../../components/VerticalBox/VerticalBox';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await login(username, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <BodyCenter>
      <VerticalLogo></VerticalLogo>
      <VerticalBox onSubmit={handleSubmit}>
        <Label>Username:</Label>
        <Input name={"username"} onChange={(e) => setUsername(e.target.value)} style={{width:"20vw"}}/>
        <Label>Password:</Label>
        <Input type="password" name={"password"} onChange={(e) => setPassword(e.target.value)} style={{width:"20vw"}}/>
        <Button type="submit" style={{width:"18vw"}} onClick={()=>{handleSubmit()}}>Entrar</Button>
      </VerticalBox>
    </BodyCenter>
  );
};

export default Login;
