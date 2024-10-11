"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Handle Email/Password Signup
  const handleSignup = async (data) => {
    setErrorMessage(null);

    const email = data.email;
    const password = data.password;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);

      if (user) {
        onSubmit({ email: user?.email, password: data.password });
      }
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMessage(err.message);
    }
  };

  const onSubmit = async (data) => {
    console.log("Form submitted", data); // Log the submitted data
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("User registered successfully");
        router.push("/sign-in"); // Redirect to sign-in page on success
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Registration failed. Please try again."
        );
        console.error("Registration failed", errorData);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  // Handle Google Sign Up (Same as Google Sign In)
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user signed up:", user);

      if (user) {
        onSubmit({ email: user?.email, password: "empty" });
      }
    } catch (err) {
      console.error("Google Sign-Up Error:", err);
      setErrorMessage(err.message);
    }
  };

  return (
    <main className="container mx-auto flex flex-col items-center px-1 py-20">
      <div className="bg-gray-200 dark:bg-[#141620] rounded-lg p-8">
        <form onSubmit={handleSubmit(handleSignup)}>
          <h1 className="mb-8 w-80 text-3xl text-white">Sign Up</h1>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="flex flex-col">
            <Label className="text-white text-base mb-2 block" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="h-14 bg-[#141620] text-white placeholder-neutral-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-5 flex flex-col">
            <Label
              className="text-white text-base mb-2 block"
              htmlFor="password"
            >
              Password{" "}
              <span className="text-sm text-gray-200">(min. 8 characters)</span>
            </Label>
            <div className="flex items-center">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum length is 8 characters",
                  },
                })}
                className="flex-1 h-14 bg-[#141620] text-white placeholder-neutral-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1"
              >
                {showPassword ? (
                  <EyeIcon className="w-5" />
                ) : (
                  <EyeOffIcon className="w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-5 flex flex-col">
            <Label
              className="text-white text-base mb-2 block"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </Label>
            <div className="flex items-center">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="flex-1 h-14 bg-[#141620] text-white placeholder-neutral-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="p-1"
              >
                {showConfirmPassword ? (
                  <EyeIcon className="w-5" />
                ) : (
                  <EyeOffIcon className="w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="mt-5">
            <p className="text-sm text-white">
              By clicking the button below, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="text-violet-400 hover:text-violet-500 transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-violet-400 hover:text-violet-500 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <Button
            className="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#6857f3] transition-colors rounded-md text-white mt-5 w-full px-4 py-2"
            type="submit"
          >
            Create Account
          </Button>
        </form>

        <div className="my-5 flex items-center justify-between">
          <div className="h-[1px] w-full bg-white"></div>
          <div className="mx-5">OR</div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>

        <div
          id="google-button-container"
          className="flex justify-center min-h-[44px]"
        >
          <div className="S9gUrf-YoZ4jf" style={{ position: "relative" }}>
            <div className="w-full">
              {/* <Button className="w-full" onClick={handleGoogleSignUp}>
                Sign Up with Google
              </Button> */}
              <Button
                onClick={handleGoogleSignUp}
                className="flex items-center justify-center w-full py-3 text-white bg-[#2498d6] hover:bg-[#2498d6] focus:ring-2 focus:ring-offset-1 focus:ring-red-500 focus:outline-none rounded-md shadow-md transition-all duration-200 h-fit"
              >
                <div className="bg-white p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.14 0 5.55 1.3 6.82 2.39l5-5C32.41 3.87 28.58 2 24 2 14.73 2 7.3 7.82 4.54 15.5l6.93 5.39C13.63 14.64 18.42 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.67 24.5c0-1.14-.1-2.27-.3-3.34H24v6.34h12.85c-.56 3-2.26 5.51-4.83 7.19l7.18 5.59c4.16-3.84 6.47-9.5 6.47-15.78z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M11.47 28.77c-1.03-.59-1.95-1.34-2.73-2.2l-6.93 5.38C5.23 37.17 9.93 41 15.6 42.5l5.38-6.9c-3.47-.97-6.45-3.16-7.94-6.83z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 46c5.58 0 10.27-1.83 13.7-4.97l-7.19-5.59c-2.02 1.36-4.58 2.16-7.5 2.16-5.47 0-10.12-3.52-11.8-8.43l-6.93 5.38C7.3 40.18 14.73 46 24 46z"
                    />
                    <path fill="none" d="M2 2h44v44H2z" />
                  </svg>
                </div>
                <span className="ml-3">Sign up with Google</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          href="/sign-in"
          className="text-violet-400 hover:text-violet-500 transition-colors text-sm"
        >
          Already have an account? Log in
        </Link>
      </div>
    </main>
  );
};

export default Page;
