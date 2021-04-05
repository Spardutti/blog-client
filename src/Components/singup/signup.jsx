import "./signup.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const [errors, setErrors] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  const setUser = (e) => {
    setUsername(e.target.value);
  };

  const setPass = (e) => {
    setPassword(e.target.value);
  };

  const setConfirmPass = (e) => {
    setConfirm(e.target.value);
  };

  let history = useHistory();

  const createUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/new/user", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        confirm: confirm,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.errors) {
      setErrors(data.errors);
    }
    if (data.msg === "User already exist") {
      setErrors([{ msg: "Username already exist" }]);
    } else {
      setErrors([{ msg: "User created!" }]);
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    }
  };

  return (
    <div className="signup-form">
      <form method="POST" action="/new/user"></form>
      <input
        onChange={setUser}
        required
        type="text"
        name="username"
        placeholder="Enter username"
      />
      <input
        onChange={setPass}
        required
        type="password"
        name="password"
        placeholder="Enter password"
      />
      <input
        onChange={setConfirmPass}
        required
        type="password"
        name="confirm"
        placeholder="Confirm password"
      />
      <button onClick={createUser} type="submit">
        Sign up
      </button>
      {errors
        ? errors.map((e, index) => {
            return (
              <p key={index} className="errors">
                {e.msg}
              </p>
            );
          })
        : null}
    </div>
  );
};

export default SignUp;
