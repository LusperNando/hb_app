import React, { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validatePassword = (value) => {
    // Example constraints: At least 8 characters, 1 uppercase, 1 number
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regex.test(value)) {
      setError(
        "Password must be at least 8 characters long, include 1 uppercase letter, and 1 number."
      );
    } else {
      setError("");
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmError("Passwords do not match.");
    } else {
      setConfirmError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    validateConfirmPassword(confirmPassword); // Re-validate confirmPassword when password changes
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  return (
    <div className="flex flex-col w-[89vh] mx-auto">
      <label htmlFor="password" className="text-lg font-medium mb-2 text-gray-600">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onClick={handlePasswordChange}
        onChange={handlechange}
        className={`p-2 border rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <div className="flex flex-row">
      <label htmlFor="confirmPassword" className="text-lg font-medium mt-4 mb-2 text-gray-600">
        Confirm Password
      </label>
      {confirmError && <p className="mt-[2.5vh] ms-2 text-red-500 text-sm mt-2">{confirmError}</p>}
      </div>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className={`p-2 border rounded-md ${
          confirmError ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 ${
          confirmError ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
    </div>
  );
};

export default PasswordInput;
