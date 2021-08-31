import React from "react";

export const UserContext = React.createContext({
  currentUser: null,
  login: () => {},
  register: () => {},
  logout: () => {}
});

export function UserProvider(props) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const login = React.useCallback(
    (username, password) => {
      const user = users.find(
        value => value.username === username && value.password === password
      );

      if (user) {
        console.log(">>", "login success");
        setCurrentUser(user);
      } else {
        console.log(">>", "user not found");
        alert("User Not Found");
      }
    },
    [users]
  );

  const register = React.useCallback(
    (username, password) => {
      const user = users.find(value => value.username === username);

      if (user) {
        console.log(">>", "user exist");
        alert("User Exist");
        return;
      }
      console.log(">>", "register success");
      setUsers([...users, { username, password }]);
      alert("Register Success");
    },
    [users]
  );

  const logout = React.useCallback(() => {
    setCurrentUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, login, register, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
