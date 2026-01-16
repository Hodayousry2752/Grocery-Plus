export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  created_at: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
    refreshToken?: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string; // أو username حسب ما يحتاجه الـ API
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string; // ليس ضروريًا للإرسال
}

export interface ForgotPasswordData {
  email: string;
}

export interface VerifyCodeData {
  code: string; // أو otp حسب الـ API
}

export interface ResetPasswordData {
  newPassword: string;
  confirmPassword: string;
  token?: string; // أضف إذا كان مطلوبًا
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}