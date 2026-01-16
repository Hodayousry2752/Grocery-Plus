import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { PASSWORD_REQUIREMENTS } from "../features/auth/utils/auth.constants";
import { useAuth } from "../features/auth/hooks/useAuth";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordErrors, setPasswordErrors] = useState<any>({});
  const { resetPassword, resetPasswordLoading } = useAuth();

  const validatePassword = (password: string) => {
    const errors = {
      length: password.length >= PASSWORD_REQUIREMENTS.minLength,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordErrors(errors);
    return Object.values(errors).every(Boolean);
  };

  const handleChange =
    (field: "newPassword" | "confirmPassword") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData({ ...formData, [field]: value });
      if (field === "newPassword") validatePassword(value);
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePassword(formData.newPassword)) {
      alert("Please fix password requirements");
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    // أرسل البيانات بشكل صحيح
    resetPassword({
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    });
  };

  const Requirement = ({ ok, text }: { ok: boolean; text: string }) => (
    <li className="flex items-center gap-2 text-sm">
      {ok ? (
        <CheckCircle className="text-green-600 w-4 h-4" />
      ) : (
        <XCircle className="text-red-600 w-4 h-4" />
      )}
      <span className={ok ? "text-green-600" : "text-red-600"}>{text}</span>
    </li>
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Reset your password
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Please enter your new password
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        {/* New Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New password"
            className="w-full border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.newPassword}
            onChange={handleChange("newPassword")}
            disabled={resetPasswordLoading}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            disabled={resetPasswordLoading}
            required
          />
          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* Password rules */}
        {formData.newPassword && (
          <ul className="bg-gray-50 border rounded-lg p-4 space-y-2">
            <Requirement ok={passwordErrors.length} text="At least 8 characters" />
            <Requirement ok={passwordErrors.uppercase} text="One uppercase letter" />
            <Requirement ok={passwordErrors.lowercase} text="One lowercase letter" />
            <Requirement ok={passwordErrors.number} text="One number" />
            <Requirement ok={passwordErrors.specialChar} text="One special character" />
          </ul>
        )}

        {/* Match indicator */}
        {formData.confirmPassword && (
          <div
            className={`text-sm font-medium ${
              formData.newPassword === formData.confirmPassword
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {formData.newPassword === formData.confirmPassword
              ? "Passwords match ✓"
              : "Passwords do not match ✗"}
          </div>
        )}

        <button
          type="submit"
          disabled={resetPasswordLoading}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50"
        >
          {resetPasswordLoading ? "Resetting..." : "Reset Password"}
        </button>

        <Link
          to="/auth/login"
          className="block text-center text-gray-500 hover:underline"
        >
          Back to login
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;