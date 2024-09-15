import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  FaceBookIcon,
  GoogleIcon,
  LinkedIcon,
} from '@/components/authForms/icons';

export const SocialContainer = () => (
  <Box className="social-container">
    <Link to="https://www.facebook.com" className="social">
      <FaceBookIcon />
    </Link>
    <Link to="https://www.google.com" className="social">
      <GoogleIcon />
    </Link>
    <Link to="https://www.linkedin.com" className="social">
      <LinkedIcon />
    </Link>
  </Box>
);
