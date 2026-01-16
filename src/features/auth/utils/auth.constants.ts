export const AUTH_ROUTES = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_CODE: '/verify-code',
  RESET_PASSWORD: '/reset-password',
  SUCCESS: '/success',
  DASHBOARD: '/dashboard',
} as const;

export const PASSWORD_REQUIREMENTS = {
  minLength: 8,
  requiresUppercase: true,
  requiresLowercase: true,
  requiresNumbers: true,
  requiresSpecialChar: true,
} as const;

export const OTP_LENGTH = 6;
export const OTP_RESEND_TIMEOUT = 120; // ثانيتين

export const SUCCESS_ACTIONS = {
  SIGNUP: 'signup',
  PASSWORD_RESET: 'password-reset',
  EMAIL_VERIFY: 'verify-email',
  DEFAULT: 'default',
} as const;

export const AUTO_REDIRECT_DELAY = 5000; // 5 ثواني

export const STORAGE_KEYS = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  RESET_TOKEN: 'resetToken',
  USER: 'user',
} as const;

export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  EMAIL_NOT_FOUND: 'Email not found',
  INVALID_OTP: 'Invalid verification code',
  EXPIRED_OTP: 'Verification code has expired',
  PASSWORD_MISMATCH: 'Passwords do not match',
  WEAK_PASSWORD: 'Password is too weak',
  UNAUTHORIZED: 'Unauthorized access',
  SESSION_EXPIRED: 'Session expired',
} as const;

export const PASSWORD_STRENGTH = {
  NONE: 'None',
  WEAK: 'Weak',
  MEDIUM: 'Medium',
  STRONG: 'Strong',
} as const;

export type PasswordStrengthType = keyof typeof PASSWORD_STRENGTH;

export const PASSWORD_STRENGTH_COLORS = {
  [PASSWORD_STRENGTH.NONE]: 'text-gray-500',
  [PASSWORD_STRENGTH.WEAK]: 'text-red-600',
  [PASSWORD_STRENGTH.MEDIUM]: 'text-yellow-600',
  [PASSWORD_STRENGTH.STRONG]: 'text-green-600',
} as const;

export const AUTH_PROVIDERS = {
  EMAIL: 'email',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  APPLE: 'apple',
} as const;

export const TOKEN_CONFIG = {
  ACCESS_TOKEN_EXPIRY: 3600, // 1 ساعة بالثواني
  REFRESH_TOKEN_EXPIRY: 2592000, // 30 يوم بالثواني
  RESET_TOKEN_EXPIRY: 900, // 15 دقيقة بالثواني
} as const;

// رسائل النجاح
export const SUCCESS_MESSAGES = {
  [SUCCESS_ACTIONS.SIGNUP]: {
    title: 'Account Created Successfully!',
    description: 'Your account has been created. You can now login and start using Grocery Plus.',
    buttonText: 'Go to Login',
    redirectTo: AUTH_ROUTES.LOGIN,
  },
  [SUCCESS_ACTIONS.PASSWORD_RESET]: {
    title: 'Password Reset Successful!',
    description: 'Your password has been reset successfully. You can now login with your new password.',
    buttonText: 'Go to Login',
    redirectTo: AUTH_ROUTES.LOGIN,
  },
  [SUCCESS_ACTIONS.EMAIL_VERIFY]: {
    title: 'Email Verified Successfully!',
    description: 'Your email has been verified. Your account is now fully activated.',
    buttonText: 'Go to Dashboard',
    redirectTo: AUTH_ROUTES.DASHBOARD,
  },
  [SUCCESS_ACTIONS.DEFAULT]: {
    title: 'Operation Successful!',
    description: 'Your action has been completed successfully.',
    buttonText: 'Continue',
    redirectTo: '/',
  },
} as const;

// تحقق من كلمة المرور
export const validatePassword = (password: string) => {
  const errors = {
    length: password.length >= PASSWORD_REQUIREMENTS.minLength,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
  
  const validCount = Object.values(errors).filter(Boolean).length;
  const total = Object.keys(errors).length;
  
  // استخدم type casting لحل المشكلة
  let strength: string = PASSWORD_STRENGTH.NONE;
  
  if (validCount > 0) {
    if (validCount <= 2) {
      strength = PASSWORD_STRENGTH.WEAK;
    } else if (validCount <= 4) {
      strength = PASSWORD_STRENGTH.MEDIUM;
    } else {
      strength = PASSWORD_STRENGTH.STRONG;
    }
  }
  
  return {
    isValid: Object.values(errors).every(Boolean),
    errors,
    strength: strength as keyof typeof PASSWORD_STRENGTH_COLORS,
    score: validCount / total,
  };
};

// تنسيق الوقت
export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// جلب رسالة الخطأ
export const getAuthErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  return 'An unexpected error occurred';
};