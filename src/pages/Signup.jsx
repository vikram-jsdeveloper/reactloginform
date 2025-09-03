import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {
  validateName,
  validateUsername,
  validatePassword,
  validateConfirm,
  validateEmail,
  validatePhone,
} from "../utils/validation";
export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    confirm: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const validateAll = () => {
    const errs = {
      name: validateName(form.name),
      username: validateUsername(form.username),
      password: validatePassword(form.password, form.username),
      confirm: validateConfirm(form.confirm, form.password),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
    };
    setErrors(errs);
    return Object.values(errs).every((v) => v === "");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (
      users.find(
        (u) =>
          u.username === form.username || u.email === form.email.toLowerCase()
      )
    ) {
      setErrors((prev) => ({
        ...prev,
        username: "Username or email exists",
        email: "Username or email exists",
      }));
      return;
    }
    users.push({
      name: form.name.trim(),
      username: form.username.trim(),
      password: form.password,
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
    });
    localStorage.setItem("users", JSON.stringify(users));

    setForm({
      name: "",
      username: "",
      password: "",
      confirm: "",
      email: "",
      phone: "",
    });

    navigate("/login", {
      replace: true,
      state: { flash: "Sign-up successful. Please log in." },
    });
  };
  return (
    <div className="auth-layout">
      <form className="card" onSubmit={onSubmit} noValidate>
        <h1 className="title">Create New Account</h1>
        <div className="field-row">
          <TextInput
            label="Name"
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            onBlur={validateAll}
            error={errors.name}
            autoComplete="name"
          />
          <TextInput
            label="Username"
            id="username"
            name="username"
            value={form.username}
            onChange={onChange}
            onBlur={validateAll}
            error={errors.username}
            autoComplete="username"
          />
        </div>
        <div className="field-row">
          <TextInput
            label="Email"
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            onBlur={validateAll}
            error={errors.email}
            autoComplete="email"
          />
          <TextInput
            label="Phone"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={onChange}
            onBlur={validateAll}
            error={errors.phone}
            autoComplete="tel"
          />
        </div>
        <div className="field-row">
          <TextInput
            label="New Password"
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            onBlur={validateAll}
            error={errors.password}
            autoComplete="new-password"
          />
          <TextInput
            label="Confirm New Password"
            id="confirm"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={onChange}
            onBlur={validateAll}
            error={errors.confirm}
            autoComplete="new-password"
          />
        </div>

        <div className="text-right">
          <Button type="submit">Sign Up</Button>
        </div>
        <p className="muted">
          Back to{" "}
          <Link to="/login" className="link">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
