import React, { useState } from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const LoginForm = styled.form`
background-color: ${({ theme }) => theme.colors.bg};
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const InputField = styled.label`
  display: block;
  margin-bottom: 15px;
  text-align: left;
  font-size: 15px;
  
`;

const GreenInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TealButton = styled.button`
  background-color: teal;
  color: white;
  padding: 15px 150px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const correctUsername = 'nabeel';
    const correctPassword = '1234';

    if (credentials.username === correctUsername && credentials.password === correctPassword) {
      alert('Login successful!');
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <CenteredContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Login</Title>
        <InputField>
          Username:
          <GreenInput type="text" name="username" value={credentials.username} onChange={handleInputChange} />
        </InputField>
        <InputField>
          Password:
          <GreenInput type="password" name="password" value={credentials.password} onChange={handleInputChange} />
        </InputField>
        <TealButton type="submit">Login</TealButton>
      </LoginForm>
    </CenteredContainer>
  );
};

export default Login;
