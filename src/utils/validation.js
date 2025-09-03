export const validateName = (v) => {
  if (!v) return "Name is required";
  return /^[A-Za-z ]+$/.test(v.trim()) ? "" : "Only letters and spaces allowed";
};
export const validateUsername = (v) => {
  if (!v) return "Username is required";
  return /^[A-Za-z0-9._\-@#$!%*?&]{6,32}$/.test(v)
    ? ""
    : "6-32 chars; letters, numbers, and . _ - @ # $ ! % * ? &";
};
export const validatePassword = (v, username = "") => {
  if (!v) return "Password is required";
  if (!/^[A-Za-z0-9._\-@#$!%*?&]{6,64}$/.test(v))
    return "6-64 chars; letters, numbers and allowed symbols";
  if (username && v === username)
    return "Password must not be same as Username";
  return "";
};
export const validateConfirm = (v, pw = "") => {
  if (!v) return "Confirm password is required";
  return v === pw ? "" : "Passwords do not match";
};
export const validateEmail = (v) => {
  if (!v) return "Email is required";
  return /^[A-Za-z0-9._%+-]+@gmail\.com$/.test(v)
    ? ""
    : "Enter a valid Gmail address";
};
export const validatePhone = (v) => {
  if (!v) return "Phone is required";
  return /^\+\d{1,3}([ -]?\d){6,14}$/.test(v)
    ? ""
    : "Enter phone as +<country-code> <number>";
};
