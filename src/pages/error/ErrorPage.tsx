import { Box } from '@mui/material';
import { useRouteError } from 'react-router-dom';

interface CustomError extends Error {
  statusText: string;
}
export const ErrorPage = () => {
  const error = useRouteError() as CustomError;

  return (
    <Box id="error-page" sx={{ margin: '10px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Box>
  );
};
