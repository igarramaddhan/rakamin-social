import React from "react";
import { UserContext } from "../contexts/UserContext";

function RegisterPage() {
  const userContext = React.useContext(UserContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const onRegister = React.useCallback(() => {
    console.log(">>", username, password, confirmPassword);
    console.log(">>", username.length, password.length, confirmPassword.length);

    if (
      typeof username === "string" &&
      typeof password === "string" &&
      typeof confirmPassword === "string" &&
      username.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      console.log("hmm");
      if (password !== confirmPassword) {
        console.log(">>", "password did not match");
        alert("Password did not match");
        return;
      }
      userContext.register(username, password);
    }
  }, [username, password, confirmPassword]);

  return (
    <div className="LoginPage-container">
      <h1>Register</h1>
      <input
        className="form"
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="form"
        placeholder="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        className="form"
        placeholder="confirm password"
        type="password"
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <button className="Button" onClick={onRegister}>
        Sign Up
      </button>
    </div>
  );
}

export default RegisterPage;
