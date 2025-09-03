import React, { useState } from "react";

export default function TextInput({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isFilled = value && value.trim() !== "";

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="field">
      <input
        id={id}
        name={name}
        type={isPassword && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`input ${error ? "input-error" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
      />

      <label
        htmlFor={id}
        className={`label ${isFilled ? "filled" : ""}`} // add class when filled
      >
        {label}
      </label>

      {/* Only show eye toggle if it's a password field */}
      {isPassword && (
        <button
          type="button"
          className="toggle-password"
          onClick={togglePassword}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "😬" : "😌"}
        </button>
      )}

      {error && (
        <div id={`${id}-err`} className="error">
          {error}
        </div>
      )}
    </div>
  );
}
