import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  //STATES
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  //REDIRECT HOOK
  let history = useHistory();

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://warm-ravine-05729.herokuapp.com/login",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data) {
      localStorage.setItem("token", data.token);
      props.setUserData(data.user);
      history.push("/");
    }
  };

  return (
    <div className="login-container">
      <form method="POST" action="/login" className="login-form"></form>
      <input
        required
        type="text"
        name="username"
        placeholder="username"
        onChange={getUsername}
      />
      <input
        required
        type="password"
        name="password"
        placeholder="password"
        onChange={getPassword}
      />
      <button type="submit" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default Login;
