import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/auth.api';
import type {
  LoginCredentials, 
  SignUpData, 
  ForgotPasswordData, 
  VerifyCodeData, 
  ResetPasswordData 
} from '../types/auth.types';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: () => {
      navigate('/dashboard');
    },
  });
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      navigate('/success');
    },
  });
};

export const useForgotPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      navigate('/verify-code');
    },
  });
};

export const useVerifyCode = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.verifyCode,
    onSuccess: () => {
      navigate('/reset-password');
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ data }: { data: ResetPasswordData }) => {
      const token = localStorage.getItem('resetToken') || '';
      return authApi.resetPassword(data, token);
    },
    onSuccess: () => {
      navigate('/success');
    },
  });
};