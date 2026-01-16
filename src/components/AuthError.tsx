import React from 'react';
import { Alert, AlertTitle, Button } from '@mui/material';
import { useAuth } from '../features/auth/hooks/useAuth';
import { getAuthErrorMessage } from '../features/auth/utils/auth.constants';

interface AuthErrorProps {
  error: any;
  mutationType: 'login' | 'signup' | 'forgotPassword' | 'verifyCode' | 'resetPassword';
  onRetry?: () => void;
}

const AuthError: React.FC<AuthErrorProps> = ({ error, mutationType, onRetry }) => {
  const { 
    resetLoginMutation, 
    resetSignupMutation, 
    resetForgotPasswordMutation,
    resetVerifyCodeMutation,
    resetResetPasswordMutation 
  } = useAuth();

  const handleRetry = () => {
    switch (mutationType) {
      case 'login':
        resetLoginMutation();
        break;
      case 'signup':
        resetSignupMutation();
        break;
      case 'forgotPassword':
        resetForgotPasswordMutation();
        break;
      case 'verifyCode':
        resetVerifyCodeMutation();
        break;
      case 'resetPassword':
        resetResetPasswordMutation();
        break;
    }
    
    if (onRetry) onRetry();
  };

  if (!error) return null;

  const errorMessage = getAuthErrorMessage(error);

  return (
    <Alert 
      severity="error" 
      className="mb-4"
      action={
        onRetry && (
          <Button color="inherit" size="small" onClick={handleRetry}>
            Retry
          </Button>
        )
      }
    >
      <AlertTitle>Error</AlertTitle>
      {errorMessage}
    </Alert>
  );
};

export default AuthError;