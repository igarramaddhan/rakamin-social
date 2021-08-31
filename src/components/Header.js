import React from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
  const userContext = React.useContext(UserContext);
  return (
    <div className="App-header">
      <div className="side-item" />
      <div className="center-item">Rakamin Social</div>
      <div className="side-item">
        {userContext.currentUser ? (
          <button className="logout-button" onClick={userContext.logout}>
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default Header;
