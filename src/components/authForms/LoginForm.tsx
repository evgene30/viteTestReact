import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { loginStyle } from './styles';

import { SignIN } from './SignIN';
import { SingUP } from './SignUP';

export const LoginForm = () => {
  const [type, setType] = useState<string>('signIn');
  const handleOnClick = (text: string) => {
    if (text !== type) {
      setType(text);
    }
  };
  const containerClass = `container ${
    type === 'signUp' ? 'right-panel-active' : ''
  }`;

  return (
    <Box sx={loginStyle}>
      <Box className={containerClass} id="container">
        <SingUP />
        <SignIN />
        <Box className="overlay-container">
          <Box className="overlay">
            <Box className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick('signIn')}
              >
                Sign In
              </Button>
            </Box>
            <Box className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick('signUp')}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
