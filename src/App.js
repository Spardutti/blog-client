import { HashRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

import Home from "./Components/home/Home";
import NavBar from "./Components/navbar/NavBar";
import Login from "./Components/login/Login";
import Post from "./Components/post/Post";
import SingUp from "./Components/singup/signup";

function App() {
  //SINGLE POST DATA
  const [postData, setPostData] = useState();
  //USER DATA
  const [userData, setUserData] = useState();
  //SINGLE POST ID
  const [postId, setPostId] = useState();

  const checkToken = () => {
    if (localStorage.getItem("token")) {
      const Codedtoken = localStorage.getItem("token");
      const token = jwt.decode(Codedtoken);
      //WHEN THE TOKEN EXPIRES
      const expiresAt = new Date(token.exp * 1000);
      //IF TOKEN EXPIRED; REMOVE IT FROM LOCAL
      if (expiresAt < new Date(Date.now())) {
        localStorage.clear();
      } else if (token) {
        //GET THE TOKEN DATA
        setUserData(token);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <HashRouter>
      <div>
        <NavBar userData={userData} setUserData={setUserData} />
      </div>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home
            userData={userData}
            setPostData={setPostData}
            postId={postId}
            setPostId={setPostId}
          />
        </Route>
        <Route path="/login">
          <Login setUserData={setUserData} />
        </Route>
        <Route path="/post">
          <Post
            postData={postData}
            userData={userData}
            postId={postId}
            setPostId={setPostId}
            setPostData={setPostData}
          />
        </Route>
        <Route path="/new/user">
          <SingUp />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
