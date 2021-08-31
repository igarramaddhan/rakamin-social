import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { UserProvider, UserContext } from "./contexts/UserContext";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="App-container">
          <Header />
          <UserContext.Consumer>
            {userContext => (
              <div className="content">
                {userContext.currentUser ? <HomePage /> : <AuthPage />}
              </div>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
