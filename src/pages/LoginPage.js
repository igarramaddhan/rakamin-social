import React from "react";
import { UserContext } from "../contexts/UserContext";

function LoginPage() {
  const userContext = React.useContext(UserContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = React.useCallback(() => {
    console.log(">>", username, password);
    if (
      typeof username === "string" &&
      typeof password === "string" &&
      username.length > 0 &&
      password.length > 0
    ) {
      userContext.login(username, password);
    }
  }, [username, password]);

  return (
    <div className="LoginPage-container">
      <h1>Login</h1>
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
      <button className="Button" onClick={onLogin}>
        Sign In
      </button>
    </div>
  );
}

export default LoginPage;
