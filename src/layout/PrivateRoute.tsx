import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = true;

  return auth ? children : <Navigate to="/login" />;
};
