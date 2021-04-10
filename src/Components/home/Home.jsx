import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./home.css";

const Home = (props) => {
  const [posts, setPosts] = useState();

  let history = useHistory();

  const { setPostData } = props;
  //GET ALL POST
  const getPosts = async () => {
    const response = await fetch(
      "https://warm-ravine-05729.herokuapp.com/blog"
    );
    const data = await response.json();
    setPosts(data);
  };

  //GET THE DATA OF THE CLICKED POST
  const singlePost = async (e) => {
    if (props.userData) {
      let id = e.target.id;
      props.setPostId(id);
      const response = await fetch(
        "https://warm-ravine-05729.herokuapp.com/blog/" + id
      );
      const data = await response.json();
      setPostData(data);
      history.push("/post");
    } else {
      alert("Please log in");
    }
  };

  //LOAD ALL POST ON PAGE LOAD
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-container">
      {/* POST LOADING */}
      {!posts ? (
        <div className="spinner">
          <Spinner color="primary" />
        </div>
      ) : (
        /* DISPLAY ALL POST */
        posts.map((e) => {
          return (
            <div
              id={e._id}
              key={e._id}
              onClick={singlePost}
              className="posts-container"
            >
              <h1 id={e._id}>{e.title}</h1>
              <div className="texts-container" id={e._id}>
                {e.text}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
