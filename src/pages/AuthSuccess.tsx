import React, { useEffect } from 'react';
import { 
  Button, 
  Typography, 
  Box, 
  Paper,
  Fade,
  Slide 
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/slices/authSlice';
import { 
  SUCCESS_MESSAGES, 
  SUCCESS_ACTIONS, 
  AUTO_REDIRECT_DELAY 
} from '../features/auth/utils/auth.constants';

const AuthSuccess: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const [showContent, setShowContent] = React.useState(false);
  const [countdown, setCountdown] = React.useState(Math.floor(AUTO_REDIRECT_DELAY / 1000));

  useEffect(() => {
    // Clear any auth errors when showing success page
    dispatch(clearUser());
    
    // Trigger animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [dispatch]);

  // Get the action type from location state
  const getActionType = (): keyof typeof SUCCESS_MESSAGES => {
    const state = location.state as { action?: string };
    const action = state?.action;
    
    // If action is a key in SUCCESS_ACTIONS (like 'SIGNUP'), convert to value (like 'signup')
    const actionKey = action?.toUpperCase() as keyof typeof SUCCESS_ACTIONS;
    
    if (actionKey && SUCCESS_ACTIONS[actionKey]) {
      return SUCCESS_ACTIONS[actionKey];
    }
    
    // If action is already a value (like 'signup'), use it directly
    const actionValues = Object.values(SUCCESS_ACTIONS);
    if (action && actionValues.includes(action as any)) {
      return action as keyof typeof SUCCESS_MESSAGES;
    }
    
    // Default fallback
    return SUCCESS_ACTIONS.DEFAULT;
  };

  const actionType = getActionType();
  const messageConfig = SUCCESS_MESSAGES[actionType] || SUCCESS_MESSAGES[SUCCESS_ACTIONS.DEFAULT];

  // Auto-redirect countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleContinue();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [actionType]);

  const handleContinue = () => {
    navigate(messageConfig.redirectTo, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Slide in={showContent} direction="up" timeout={500}>
        <Paper 
          elevation={3} 
          className="p-8 md:p-12 w-full max-w-md text-center"
        >
          <Fade in={showContent} timeout={1000}>
            <div>
              <CheckCircleIcon 
                className="text-green-600" 
                sx={{ fontSize: 80, mb: 3 }}
              />
              
              <Typography 
                variant="h4" 
                className="font-bold text-gray-800 mb-4"
                gutterBottom
              >
                {messageConfig.title}
              </Typography>
              
              <Typography 
                variant="body1" 
                className="text-gray-600 mb-8"
                paragraph
              >
                {messageConfig.description}
              </Typography>

              <Box className="space-y-4">
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleContinue}
                >
                  {messageConfig.buttonText}
                </Button>

                <Typography 
                  variant="caption" 
                  className="text-gray-500 block"
                >
                  Redirecting in {countdown} seconds...
                </Typography>

                <Button
                  variant="text"
                  size="small"
                  onClick={() => navigate('/')}
                  className="text-gray-600"
                >
                  Go to Homepage
                </Button>
              </Box>
            </div>
          </Fade>
        </Paper>
      </Slide>
    </div>
  );
};

export default AuthSuccess;