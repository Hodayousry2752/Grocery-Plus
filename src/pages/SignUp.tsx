import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import googleIcon from "../assets/google icon.png";

export default function SignUp() {
  const { signup, signupLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [key]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto text-start">
      {/* Title */}
      <h1 className="text-[28px] font-semibold mb-3">
        Create your account!
      </h1>
      <p className="text-sm font-medium mb-10">
        Enter your Full Details
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange("name")}
            className="
              w-full h-[52px]
              border border-gray-200
              rounded-md
              pl-11 pr-4
              text-sm
              outline-none
              focus:border-gray-400
            "
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
            className="
              w-full h-[52px]
              border border-gray-200
              rounded-md
              pl-11 pr-4
              text-sm
              outline-none
              focus:border-gray-400
            "
            required
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange("phone")}
            className="
              w-full h-[52px]
              border border-gray-200
              rounded-md
              pl-11 pr-4
              text-sm
              outline-none
              focus:border-gray-400
            "
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange("password")}
            className="
              w-full h-[52px]
              border border-gray-200
              rounded-md
              pl-11 pr-11
              text-sm
              outline-none
              focus:border-gray-400
            "
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {/* Remember me */}
<div className="flex items-center gap-2">
  <input
    type="checkbox"
    id="remember"
    className="
      w-4 h-4
      rounded-full
      border border-gray-300
      accent-primary
      cursor-pointer
    "
  />
  <label
    htmlFor="remember"
    className="text-sm text-gray-600 cursor-pointer"
  >
    Remember me
  </label>
</div>


        {/* Continue */}
        <button
          type="submit"
          disabled={signupLoading}
          className="
            w-full h-[52px]
            rounded-md
            text-white
            text-sm
            font-medium
            bg-linear-to-b from-primary to-[#5a8e9e]
            hover:opacity-95
            transition cursor-pointer
          "
        >
          {signupLoading ? "Creating..." : "Continue"}
        </button>
      </form>
       {/* Divider */}
      <p className="mt-10 mb-5 text-sm text-gray-500 text-center">
        Continue In With
      </p>

      {/* Social buttons */}
      <div className="flex justify-center gap-4 ">
        <button
          className="
            flex items-center gap-2
            px-4 h-[44px]
            rounded-md
            border border-gray-200
            bg-[#F7FCFF]
            text-sm cursor-pointer
          "
        >
          <img src={googleIcon} className="w-4 h-4" />
          Continue with google
        </button>
      </div>
      {/* Footer */}
      <p className="mt-5 text-sm text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary font-medium"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}
