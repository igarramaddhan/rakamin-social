import React from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function AuthPage() {
  const [isLoginPage, setIsLoginPage] = React.useState(true);
  return (
    <>
      {isLoginPage ? <LoginPage /> : <RegisterPage />}
      <button
        style={{ marginTop: 16 }}
        className="link"
        onClick={() => setIsLoginPage(!isLoginPage)}
      >
        {isLoginPage ? "Register" : "Login"}
      </button>
    </>
  );
}

export default AuthPage;
