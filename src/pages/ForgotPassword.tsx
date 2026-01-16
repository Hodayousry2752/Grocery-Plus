import { useState } from "react";
import { Mail } from "lucide-react";
import { useAuth } from "../features/auth/hooks/useAuth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { forgotPassword, forgotPasswordLoading } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPassword({ email });
  };

  return (
    <div className="w-full max-w-[420px] mx-auto text-center">
      {/* Title */}
      <h1 className="text-[26px] font-semibold mb-2 text-[#4B1E1E]">
        Password Recovery
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Enter your Mobile Number to recover <br />
        your password
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email / Mobile */}
        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="email"
            placeholder="Email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full h-[50px]
              border border-gray-300
              rounded-md
              pl-11 pr-4
              text-sm
              outline-none
              focus:border-gray-400
            "
            required
          />
        </div>

        {/* Verify */}
        <button
          type="submit"
          disabled={forgotPasswordLoading}
          className="
            w-full h-[44px]
            rounded-md
            text-white
            text-sm
            font-medium
            bg-primary
            hover:opacity-95
            transition
          "
        >
          {forgotPasswordLoading ? "Verifying..." : "Verify"}
        </button>
      </form>

      {/* Back */}
      <p className="mt-8 text-sm">
        <Link to="/auth/login" className="text-gray-500 hover:underline">
          Back to Login
        </Link>
      </p>
    </div>
  );
}
