import React from "react";
export default function Button({
  children,
  type = "button",
  onClick,
  disabled,
}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="btn">
      {children}
    </button>
  );
}
