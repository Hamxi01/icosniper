"use client";
import { ChevronRight, EyeOffIcon, EyeIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { auth } from "@/firebaseConfig";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const page = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const router = useRouter(); // Initialize router

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("tv3623315"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Function to reauthenticate the user
  const reauthenticateUser = async (currentPassword) => {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    try {
      await reauthenticateWithCredential(user, credential);
      return true;
    } catch (error) {
      console.error("Error reauthenticating:", error);
      alert("Reauthentication failed. Please check your current password.");
      return false;
    }
  };

  // Function to handle password change
  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }

    setLoading(true);

    try {
      // Reauthenticate the user before changing password
      const isReauthenticated = await reauthenticateUser(currentPassword);
      if (!isReauthenticated) return;

      // Update password after successful reauthentication
      const user = auth.currentUser;
      await updatePassword(user, newPassword);

      const udpatedUser = await fetch(`/api/users/update-password`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword, ...currentUser }),
      });

      if (udpatedUser.ok) {
        alert("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle account deletion
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action is irreversible."
    );

    if (!confirmDelete) return;

    setLoading(true);

    try {
      // Re-authenticate the user before account deletion
      // const isReauthenticated = await reauthenticateUser();
      // if (!isReauthenticated) return; // Stop if re-authentication fails

      // Attempt to delete user without re-authenticating
      const user = auth.currentUser;
      await deleteUser(user);

      // Remove user from your database
      const deletedUser = await fetch(`/api/users`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(currentUser), // Pass the current user's data
      });

      if (deletedUser.ok) {
        alert("Account deleted successfully");

        localStorage.removeItem("tv3623315");
        // Use router.push instead of window.location.href
        router.push("/"); // Redirect to homepage after deletion
      }
    } catch (error) {
      if (error.code === "auth/requires-recent-login") {
        // Handle error: Firebase may require re-authentication for sensitive actions
        alert(
          "Your session is too old, please log in again to delete your account."
        );
        // Optional: Redirect to a login page where users can sign in again
      } else {
        console.error("Error deleting account:", error);
        alert("Failed to delete account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="container mx-auto w-full max-w-[1366px] mb-28 flex flex-col items-center p-1">
        <section className="w-full">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 mt-6 flex items-center text-xs font-normal"
          >
            <a
              className="text-violet-400 hover:text-violet-500 transition-colors"
              href="/"
            >
              Home
            </a>
            <ChevronRight />
            <a
              className=" capitalize text-neutral-400 transition-colors hover:text-white"
              href="/settings"
            >
              settings
            </a>
          </nav>
          <div className="flex items-center justify-between">
            <h1 className="mb-6 text-3xl font-medium">Account Settings</h1>
            <a
              className="text-violet-400 hover:text-violet-500 transition-colors"
              href="/dashboard"
            >
              Back to Dashboard
            </a>
          </div>
          <div className="flex flex-col justify-evenly gap-6 md:flex-row">
            <div className="bg-gray-200 dark:bg-[#141620] rounded-lg p-8 flex w-full ">
              <form
                className="w-80"
                autoComplete="off"
                onSubmit={handleChangePassword}
              >
                <h2 className="mb-6 text-2xl font-medium">Change password</h2>
                <label
                  className="text-white text-base mb-2 block"
                  htmlFor="currentPassword"
                >
                  Current password
                </label>
                <div className="border rounded-md h-14 bg-[#141620] p-4 text-white flex items-center justify-center">
                  <input
                    className="w-full dark:bg-[#141620] outline-none"
                    type={showCurrentPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <button className="p-1" type="button">
                    {showCurrentPassword ? (
                      <EyeIcon onClick={() => setShowCurrentPassword(false)} />
                    ) : (
                      <EyeOffIcon
                        onClick={() => setShowCurrentPassword(true)}
                      />
                    )}
                  </button>
                </div>
                <label
                  className="text-white text-base mb-2 block my-2"
                  htmlFor="newPassword"
                >
                  New password
                  <span className="text-sm text-gray-200">
                    (min. 8 characters)
                  </span>
                </label>
                <div className="border rounded-md h-14 bg-[#141620] p-4 text-white flex items-center justify-center">
                  <input
                    className="w-full dark:bg-[#141620] outline-none"
                    type={showNewPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button className="p-1" type="button">
                    {showNewPassword ? (
                      <EyeIcon onClick={() => setShowNewPassword(false)} />
                    ) : (
                      <EyeOffIcon onClick={() => setShowNewPassword(true)} />
                    )}
                  </button>
                </div>
                <label
                  className="text-white text-base mb-2 block my-2"
                  htmlFor="newPasswordConfirmation"
                >
                  Confirm new password
                </label>
                <div className="border rounded-md h-14 bg-[#141620] p-4 text-white flex items-center justify-center">
                  <input
                    className="w-full dark:bg-[#141620] outline-none"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button className="p-1" type="button">
                    {showConfirmPassword ? (
                      <EyeIcon onClick={() => setShowConfirmPassword(false)} />
                    ) : (
                      <EyeOffIcon
                        onClick={() => setShowConfirmPassword(true)}
                      />
                    )}
                  </button>
                </div>
                <div className="flex w-full justify-center">
                  <button
                    className="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#493cb5] transition-colors rounded-md text-white mt-5 px-2 py-1"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Changing..." : "Change password"}
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-gray-200 dark:bg-[#141620] rounded-lg p-8 flex w-full ">
              <div className="w-80">
                <h2 className="mb-6 text-2xl font-medium">Delete Account</h2>
                <div className="h-24">
                  <button
                    className="border-2 bg-[#4c3cce] border-[#6857f3] hover:bg-[#6857f3] active:bg-[#493cb5] transition-colors rounded-md text-white mt-5 px-2 py-1"
                    type="button"
                    onClick={handleDeleteAccount}
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Delete account"}
                  </button>
                </div>
                <p className="mt-5 md:whitespace-nowrap">
                  Note: This will NOT delete any submitted projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
