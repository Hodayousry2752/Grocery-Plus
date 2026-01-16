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
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (response) => {
      if (response.success && response.data.token) {
        // حفظ التوكن عند تسجيل الدخول الناجح
        localStorage.setItem('token', response.data.token);
        if (response.data.refreshToken) {
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
      }
      navigate('/dashboard');
    },
  });
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: SignUpData) => authApi.signup(data),
    onSuccess: (response) => {
      if (response.success && response.data.token) {
        // حفظ التوكن عند التسجيل الناجح
        localStorage.setItem('token', response.data.token);
        if (response.data.refreshToken) {
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
      }
      navigate('/success');
    },
  });
};

export const useForgotPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ForgotPasswordData) => authApi.forgotPassword(data),
    onSuccess: () => {
      navigate('/verify-code');
    },
  });
};

export const useVerifyCode = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: VerifyCodeData) => authApi.verifyCode(data),
    onSuccess: (response) => {
      // حفظ التوكن الذي يأتي من verifyCode للاستخدام في reset password
      if (response.token) {
        localStorage.setItem('resetToken', response.token);
      }
      navigate('/reset-password');
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ResetPasswordData) => {
      // الحصول على التوكن من localStorage
      const token = localStorage.getItem('resetToken') || '';
      return authApi.resetPassword(data, token);
    },
    onSuccess: () => {
      // تنظيف التوكن بعد الاستخدام
      localStorage.removeItem('resetToken');
      navigate('/success');
    },
    onError: () => {
      // تنظيف التوكن في حالة الخطأ أيضاً
      localStorage.removeItem('resetToken');
    },
  });
};

// إضافة دوال إضافية إذا لزم الأمر
export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      // تنظيف التوكنات عند تسجيل الخروج
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('resetToken');
      navigate('/login');
    },
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: (refreshToken: string) => authApi.refreshToken(refreshToken),
    onSuccess: (response) => {
      if (response.success && response.data.token) {
        // تحديث التوكنات
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      }
    },
  });
};