import { Box } from '@mui/material';
import { LoginForm } from '@/components/authForms/LoginForm';
import { Footer } from '@/components/footer';
import { layoutStyle } from '@/layout/styles';

export const LoginPage = () => (
  <Box component="main" sx={layoutStyle}>
    <Box className="content">
      <LoginForm />
    </Box>
    <Footer />
  </Box>
);
