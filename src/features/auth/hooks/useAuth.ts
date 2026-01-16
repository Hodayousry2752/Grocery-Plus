import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authApi } from '../api/auth.api';
import api from '../../../services/api';
import type {
  LoginCredentials,
  SignUpData,
  ForgotPasswordData,
  VerifyCodeData,
  ResetPasswordData,
  AuthResponse,
} from '../types/auth.types';
import { setUser, logout as logoutAction } from '../../../store/slices/authSlice';
import { AUTH_ROUTES } from '../utils/auth.constants';

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const navigateToSuccess = (action: string = 'default') => {
    navigate(AUTH_ROUTES.SUCCESS, {
      state: { action },
      replace: true
    });
  };

  const loginMutation = useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      if (data.success && data.data) {
        dispatch(setUser(data.data.user));
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        if (data.data.refreshToken) {
          localStorage.setItem('refreshToken', data.data.refreshToken);
        }
        queryClient.invalidateQueries({ queryKey: ['user'] });
        // تم إزالة navigate من هنا وسيتم التعامل معه في المكون
      }
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });

  const signupMutation = useMutation<AuthResponse, Error, SignUpData>({
    mutationFn: authApi.signup,
    onSuccess: (data) => {
      if (data.success && data.data) {
        dispatch(setUser(data.data.user));
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        if (data.data.refreshToken) {
          localStorage.setItem('refreshToken', data.data.refreshToken);
        }
        queryClient.invalidateQueries({ queryKey: ['user'] });
        // توجيه مباشر إلى الصفحة الرئيسية بعد التسجيل
        navigate('/', { replace: true });
      }
    },
    onError: (error) => {
      console.error('Signup error:', error);
    },
  });

  const forgotPasswordMutation = useMutation<
    { message: string }, 
    Error, 
    ForgotPasswordData
  >({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      navigate(AUTH_ROUTES.VERIFY_CODE);
    },
    onError: (error) => {
      console.error('Forgot password error:', error);
    },
  });

  const verifyCodeMutation = useMutation<
    { success: boolean; message: string; token?: string }, 
    Error, 
    VerifyCodeData
  >({
    mutationFn: authApi.verifyCode,
    onSuccess: (data) => {
      if (data.success && data.token) {
        localStorage.setItem('resetToken', data.token);
        navigate(AUTH_ROUTES.RESET_PASSWORD);
      }
    },
    onError: (error) => {
      console.error('Verify code error:', error);
    },
  });

  const resetPasswordMutation = useMutation<
    { success: boolean; message: string }, 
    Error, 
    ResetPasswordData
  >({
    mutationFn: (data: ResetPasswordData) => {
      const token = localStorage.getItem('resetToken');
      if (token) {
        // إذا كان الـ API يحتاج token في الـ headers
        return api.post('/auth/reset-password', data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      return authApi.resetPassword(data);
    },
    onSuccess: (data) => {
      if (data.success) {
        localStorage.removeItem('resetToken');
        navigateToSuccess('password-reset');
      }
    },
    onError: (error) => {
      console.error('Reset password error:', error);
    },
  });

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch(logoutAction());
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('resetToken');
      queryClient.clear();
      navigate(AUTH_ROUTES.LOGIN, { replace: true });
    }
  };

  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const getCurrentToken = () => {
    return localStorage.getItem('token');
  };

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token');
      
      const response = await authApi.refreshToken(refreshToken);
      if (response.success && response.data) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Refresh token error:', error);
      logout();
      return false;
    }
  };

  return {
    // Login
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    loginLoading: loginMutation.isPending,
    loginError: loginMutation.error,
    
    // Signup
    signup: signupMutation.mutate,
    signupAsync: signupMutation.mutateAsync,
    signupLoading: signupMutation.isPending,
    signupError: signupMutation.error,
    
    // Forgot Password
    forgotPassword: forgotPasswordMutation.mutate,
    forgotPasswordAsync: forgotPasswordMutation.mutateAsync,
    forgotPasswordLoading: forgotPasswordMutation.isPending,
    forgotPasswordError: forgotPasswordMutation.error,
    
    // Verify Code
    verifyCode: verifyCodeMutation.mutate,
    verifyCodeAsync: verifyCodeMutation.mutateAsync,
    verifyCodeLoading: verifyCodeMutation.isPending,
    verifyCodeError: verifyCodeMutation.error,
    
    // Reset Password
    resetPassword: resetPasswordMutation.mutate,
    resetPasswordAsync: resetPasswordMutation.mutateAsync,
    resetPasswordLoading: resetPasswordMutation.isPending,
    resetPasswordError: resetPasswordMutation.error,
    
    // Other auth functions
    logout,
    checkAuthStatus,
    getCurrentToken,
    refreshToken,
    
    // Reset mutations
    resetLoginMutation: loginMutation.reset,
    resetSignupMutation: signupMutation.reset,
    resetForgotPasswordMutation: forgotPasswordMutation.reset,
    resetVerifyCodeMutation: verifyCodeMutation.reset,
    resetResetPasswordMutation: resetPasswordMutation.reset,
    
    // Expose mutation for more control
    loginMutation,
    signupMutation,
  };
};