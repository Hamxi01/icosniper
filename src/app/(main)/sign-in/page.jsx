"use client";

import { EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Handle Email/Password Sign In
  const handleSignIn = async (data) => {
    setErrorMessage(null);

    const email = data.email;
    const password = data.password;

    console.log(`Email: ${email} & Password: ${password}`);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);

      if (user) {
        onSubmit({ email: user?.email, password: password });
      }
    } catch (err) {
      console.error("Sign in error:", err);
      setErrorMessage(err.message);
    }
  };

  const onSubmit = async (data) => {
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const userData = await response.json(); // Get user data from response
        console.log("User logged in successfully");

        // Set user data in local storage
        localStorage.setItem("tv3623315", JSON.stringify(userData));

        router.push("/dashboard"); // Redirect to the dashboard or desired page
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
        console.error("Login failed", errorData);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  // Handle Google Sign In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user signed in:", user);

      if (user) {
        onSubmit({ email: user?.email, password: "empty" });
      }
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setErrorMessage(err.message);
    }
  };

  return (
    <main className="container mx-auto flex flex-col items-center px-1 py-20">
      <div className="bg-gray-200 dark:bg-[#141620] rounded-lg p-8">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <h1 className="mb-8 w-80 text-3xl text-white">Log In</h1>

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
              Password
            </Label>
            <div className="flex items-center">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                })}
                className="flex-1 h-14 bg-[#141620] text-white placeholder-neutral-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1"
              >
                <EyeOffIcon className="w-5" />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <a
            className="text-violet-400 hover:text-violet-500 transition-colors text-sm mt-2"
            href="/forgot-password"
          >
            Forgot password?
          </a>

          <Button
            className="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#6857f3] transition-colors rounded-md text-white mt-5 w-full px-4 py-2"
            type="submit"
          >
            Log In
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
          {/* <Button onClick={handleGoogleSignIn}>Sign in with Google</Button> */}
          <Button
            onClick={handleGoogleSignIn}
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
            <span className="ml-3">Sign in with Google</span>
          </Button>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          className="text-violet-400 hover:text-violet-500 transition-colors text-sm"
          href="/sign-up"
        >
          Don't have an account? Sign up
        </Link>
      </div>
    </main>
  );
};

export default Page;
