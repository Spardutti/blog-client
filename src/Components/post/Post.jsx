import "./post.css";
import { useState, useEffect } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const [token, setToken] = useState();
  const [postText, setPostText] = useState("");

  //GET TE TOKEN FROM THE STORAGE
  const getToken = () => {
    setToken(localStorage.getItem("token"));
  };
  //GET THE TOKEN ON MOUNT
  useEffect(() => {
    getToken();
  }, []);

  const addComment = async (e) => {
    if (!postText) {
      alert("Please add a comment");
      e.preventDefault();
    } else {
      e.preventDefault();
      const response = await fetch(
        "https://warm-ravine-05729.herokuapp.com/blog/" + props.postId,
        {
          method: "PUT",
          body: JSON.stringify({
            author: props.userData,
            text: postText,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      setPostText("");
      props.setPostData(data);
    }
  };

  const eventHandler = (e) => {
    setPostText(e.target.value);
  };

  //REDIRECT HOOK
  let history = useHistory();

  //RETURN TO MAIN PAGE
  const goBack = () => {
    props.setPostData();
    setPostText();
    history.push("/");
  };

  return (
    /* PROTECT AGAINS PAGES REFRESH SETTING THE POSTDATA TO NULL */
    props.postData ? (
      <div className="post-container">
        <h1>{props.postData.title}</h1>
        <div className="text-container">
          <p>{props.postData.text}</p>
        </div>
        <div className="addcomment-form">
          <form method="PUT" action="/blog/:id">
            <textarea
              rows="10"
              type="text"
              value={postText}
              onChange={eventHandler}
              placeholder="Enter a comment..."
            />
            <div>
              <button onClick={addComment}>Add</button>
            </div>
          </form>
          <div onClick={goBack} className="goback-arrow">
            <i className="fas fa-arrow-left"></i>
          </div>
        </div>
        {props.postData.comments.map((comment) => {
          //time passed since comment was created
          let timeago = moment(comment.time).fromNow();
          return (
            <div key={comment._id} className="comment-container">
              <p className="comment-text">{comment.text}</p>
              <div className="comment-author">
                <p>@{comment.author}</p>
                <p>{timeago}</p>
              </div>
            </div>
          );
        })}
      </div>
    ) : //IF POSTDATA === NULL REDIRECT
    null
  );
};

export default Post;
