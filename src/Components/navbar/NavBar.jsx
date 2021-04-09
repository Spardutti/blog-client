import "./navbar.css";
import { Link, useHistory } from "react-router-dom";

const NavBar = (props) => {
  let history = useHistory();

  const removeToken = (e) => {
    props.setUserData();
    localStorage.clear();
    history.push("/");
    e.preventDefault();
  };

  return (
    <div className="nav-container">
      <h1>Bloggin Blog</h1>
      <div className="links-container">
        {/*IF USER IS LOGGED IN DISPLAY LOGOUT */}
        {props.userData ? (
          <div className="nav-items">
            <Link to="/blog-client/">Home</Link>
            <p>Hi, {props.userData.username}</p>
            <form method="GET" action="/logout">
              <button onClick={removeToken}>Log out</button>
            </form>
          </div>
        ) : (
          /*IF USER IS NOT YET LOGGED */
          <div className="nav-items">
            <Link to="/blog-client/">Home</Link>
            <Link to="/blog-client/new/user">Sign up</Link>
            <Link to="/blog-client/login">Log in</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
