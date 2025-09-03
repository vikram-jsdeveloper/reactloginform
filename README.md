# 🔐 React Login & Signup App

A simple **React authentication demo** with:

- Sign-up with validation
- Login with validation
- LocalStorage persistence
- Flash messages (success/welcome banners)
- Floating labels with animation
- Password toggle (show/hide)

---

## 🚀 Features

- **Sign Up**
  - Name, Username, Email, Phone, Password, Confirm Password
  - Client-side validation
  - Prevents duplicate username/email
  - Stores users in `localStorage`
  - Redirects to Login page with success message
- **Login**
  - Login with username or email + password
  - Displays error on invalid credentials
  - Shows one-time success banner on redirect
- **UI**
  - Floating labels with animation
  - Password visibility toggle (eye icon)
  - Styled flash banners

---

## 📂 Project Structure

├── components/
│ ├── TextInput.jsx # Reusable input with floating label + error + password toggle
│ └── Button.jsx # Reusable button
├── pages/
│ ├── Signup.jsx # Sign-up page
│ └── Login.jsx # Login page
├── utils/
│ └── validation.js # Validation helpers
├── App.jsx # Routes config
└── index.js # Entry point

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/react-login-signup.git
cd react-login-signup
npm install
npm install
Now visit http://localhost:3000/login
```
