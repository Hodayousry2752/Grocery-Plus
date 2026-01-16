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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some(c => !c)) return;
    verifyCode({ code });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">
        Enter verification code
      </h2>
      <p className="text-center text-gray-500 mt-2">
        We sent a {OTP_LENGTH}-digit code to your email
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex justify-center gap-2">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              maxLength={1}
              className="w-14 h-14 border rounded-lg text-center text-xl
                        focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={verifyCodeLoading}
            />

          ))}
        </div>

        <p className="text-center text-gray-500">
          Resend code in{" "}
          <span className="font-semibold text-primary">
            {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        </p>

        <button
          type="submit"
          disabled={verifyCodeLoading}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium"
        >
          {verifyCodeLoading ? "Verifying..." : "Verify Code"}
        </button>

        <Link
          to="/forgot-password"
          className="block text-center text-gray-500 hover:underline"
        >
          Back
        </Link>
      </form>
    </div>
  );
};

export default VerifyCode;
