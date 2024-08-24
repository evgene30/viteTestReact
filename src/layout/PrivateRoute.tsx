import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = false;

  return auth ? children : <Navigate to="/login" />;
};
