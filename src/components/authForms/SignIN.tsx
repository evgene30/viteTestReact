import { Box, Button } from '@mui/material';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export const SignIN = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = state;
    console.log({ email, password });

    setState({
      email: '',
      password: '',
    });
  };

  return (
    <Box className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <Box className="social-container">
          <Link to="https://www.facebook.com" className="social">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to="https://www.google.com" className="social">
            <i className="fab fa-google-plus-g" />
          </Link>
          <Link to="https://www.linkedin.com" className="social">
            <i className="fab fa-linkedin-in" />
          </Link>
        </Box>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <Link to="https://www.linkedin.com">Forgot your password?</Link>
        <Button type="submit">Sign Up</Button>
      </form>
    </Box>
  );
};
