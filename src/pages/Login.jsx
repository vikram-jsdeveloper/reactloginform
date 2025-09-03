import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { validatePassword } from "../utils/validation";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ usernameOrEmail: "", password: "" });
  const [errors, setErrors] = useState({});

  // Read flash message
  const flashMessage = location.state?.flash;

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validateAll = () => {
    const errs = {
      usernameOrEmail: form.usernameOrEmail ? "" : "Enter username or email",
      password: validatePassword(form.password),
    };
    setErrors(errs);
    return Object.values(errs).every((v) => v === "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) =>
        u.username === form.usernameOrEmail ||
        u.email === form.usernameOrEmail.toLowerCase()
    );

    if (!user || user.password !== form.password) {
      setErrors({
        usernameOrEmail: "Invalid credentials",
        password: "Invalid credentials",
      });
      return;
    }

    navigate("/login", {
      replace: true,
      state: { flash: `Welcome back, ${user.name}!` },
    });
  };

  return (
    <div className="auth-layout">
      <form className="card" onSubmit={onSubmit} noValidate>
        <h1 className="title">
          Login
          <br /> <p>Sign in to continue</p>
        </h1>

        <TextInput
          label="Username"
          id="usernameOrEmail"
          name="usernameOrEmail"
          value={form.usernameOrEmail}
          onChange={onChange}
          onBlur={validateAll}
          error={errors.usernameOrEmail}
          autoComplete="username"
        />
        <TextInput
          label="Password"
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          onBlur={validateAll}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="text-center">
          <Button type="submit">Log In</Button>
        </div>

        <p className="muted">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>
      </form>

      {/* Flash success banner */}
      {flashMessage && <div className="banner">{flashMessage}</div>}
    </div>
  );
}
