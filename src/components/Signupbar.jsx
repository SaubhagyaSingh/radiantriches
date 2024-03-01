import React from "react";

const SignupBar = () => {
  return (
    <div
      style={{
        width: "348px",
        height: "52px",
        borderRadius: "12px 0px 0px 12px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "0 16px",
      }}
    >
      <input
        type="email"
        placeholder=""
        style={{
          height: "100%",
          border: "none",
          outline: "none",
          fontSize: "16px",
          paddingLeft: "16px",
        }}
      />
      <button
        style={{
          width: "97px",
          height: "52px",
          borderRadius: "0px 12px 12px 0px",
          backgroundColor: "#1B88F4",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignupBar;
