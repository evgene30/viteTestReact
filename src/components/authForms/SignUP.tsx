import { Box, Button } from '@mui/material';
import { FormEvent, useState } from 'react';
import { SocialContainer } from '@/components/authForms/SocialContainer';

export const SingUP = () => {
  const [state, setState] = useState({
    name: '',
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

    const { name, email, password } = state;
    console.log({ name, email, password });

    setState({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Box className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <SocialContainer />
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          style={{ marginBottom: '25px' }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </Box>
  );
};
