import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { OTP_LENGTH } from "../features/auth/utils/auth.constants";
import { useAuth } from "../features/auth/hooks/useAuth";

const VerifyCode = () => {
  const [code, setCode] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [timeLeft, setTimeLeft] = useState(120);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { verifyCode, verifyCodeLoading } = useAuth();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const newCode = [...code];
    newCode[i] = val;
    setCode(newCode);
    if (val && i < OTP_LENGTH - 1) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من أن جميع الحقول مملوءة
    if (code.some(c => !c)) {
      alert("Please enter the complete verification code");
      return;
    }

    // تحويل المصفوفة إلى سلسلة نصية
    const codeString = code.join('');
    
    // إرسال الكود كسلسلة نصية
    verifyCode({ code: codeString });
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // التحقق من أن النص الملصق يحتوي على أرقام فقط
    const digits = pastedData.replace(/\D/g, '').split('').slice(0, OTP_LENGTH);
    
    if (digits.length === OTP_LENGTH) {
      const newCode = [...code];
      digits.forEach((digit, index) => {
        newCode[index] = digit;
      });
      setCode(newCode);
      
      // نقل التركيز إلى آخر حقل
      if (inputRefs.current[OTP_LENGTH - 1]) {
        inputRefs.current[OTP_LENGTH - 1]?.focus();
      }
    }
  };

  const handleResendCode = () => {
    // هنا يمكنك إضافة منطق إعادة إرسال الكود
    setTimeLeft(120);
    setCode(Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
    
    // إضافة منطق إعادة إرسال الكود إلى البريد الإلكتروني
    // مثلاً: resendVerificationCode();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Enter verification code
      </h2>
      <p className="text-center text-gray-500 mt-2">
        We sent a {OTP_LENGTH}-digit code to your email
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div 
          className="flex justify-center gap-3"
          onPaste={handlePaste}
        >
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              maxLength={1}
              className="w-14 h-14 border-2 rounded-lg text-center text-2xl font-semibold
                        focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                        transition-all duration-200"
              disabled={verifyCodeLoading}
              type="tel"
              inputMode="numeric"
              autoComplete="one-time-code"
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500">
            {timeLeft > 0 ? (
              <>
                Resend code in{" "}
                <span className="font-semibold text-primary">
                  {formatTime(timeLeft)}
                </span>
              </>
            ) : (
              <button
                type="button"
                onClick={handleResendCode}
                className="text-primary font-semibold hover:underline"
              >
                Resend code
              </button>
            )}
          </p>
        </div>

        <button
          type="submit"
          disabled={verifyCodeLoading || code.some(c => !c)}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium
                    hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
                    transition-colors duration-200"
        >
          {verifyCodeLoading ? "Verifying..." : "Verify Code"}
        </button>

        <div className="text-center">
          <Link
            to="/forgot-password"
            className="text-gray-500 hover:text-primary hover:underline transition-colors"
          >
            Back to forgot password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyCode;