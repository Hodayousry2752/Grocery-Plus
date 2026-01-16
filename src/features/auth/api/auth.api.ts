import api from '../../../services/api';
import type {
  LoginCredentials,
  SignUpData,
  ForgotPasswordData,
  VerifyCodeData,
  ResetPasswordData,
  AuthResponse,
} from '../types/auth.types';

export const authApi = {
  // تسجيل الدخول
  login: (credentials: LoginCredentials): Promise<AuthResponse> =>
    api.post('/auth/login', credentials),
  
  // التسجيل - استخدم /register بدلاً من /signup
  signup: (data: SignUpData): Promise<AuthResponse> =>
    api.post('/auth/register', data),
  
  // نسيت كلمة المرور
  forgotPassword: (data: ForgotPasswordData): Promise<{ message: string }> =>
    api.post('/auth/forgot-password', data),
  
  // التحقق بالرمز
  verifyCode: (data: VerifyCodeData): Promise<{ 
    success: boolean; 
    message: string;
    token?: string 
  }> =>
    api.post('/auth/verify-code', data),
  
  // إعادة تعيين كلمة المرور
  resetPassword: (data: ResetPasswordData): Promise<{ 
    success: boolean; 
    message: string 
  }> =>
    api.post('/auth/reset-password', data),
  
  // تسجيل الخروج
  logout: (): Promise<{ message: string }> => 
    api.post('/auth/logout'),
  
  // تحديث التوكن
  refreshToken: (refreshToken: string): Promise<{ 
    success: boolean;
    data: {
      token: string;
      refreshToken: string;
    }
  }> =>
    api.post('/auth/refresh-token', { refreshToken }),
  
  // التحقق من التوكن
  verifyToken: (token: string): Promise<{ 
    success: boolean;
    valid: boolean;
    user: any 
  }> =>
    api.post('/auth/verify-token', { token }),
};