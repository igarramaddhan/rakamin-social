import React from "react";
import { UserContext } from "../contexts/UserContext";
import dayjs from "dayjs";

function HomePage() {
  const [posts, setPosts] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const userContext = React.useContext(UserContext);

  const addPost = React.useCallback(() => {
    console.log(">>", userContext);
    if (
      typeof title === "string" &&
      typeof content === "string" &&
      title.length > 0 &&
      content.length > 0
    ) {
      const username = userContext.currentUser.username;
      setPosts([
        ...posts,
        { title, content, username, createdAt: dayjs().toString() }
      ]);
      setTitle("");
      setContent("");
    }
  }, [title, content]);
  return (
    <div className="HomePage-container">
      <h1>Welcome, User</h1>
      <div>This will be contain post list</div>
      <div>
        <div className="HomePage-form-container">
          <div className="HomePage-form-section">
            <input
              className="HomePage-input-title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              className="HomePage-input-title"
              placeholder="Content"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>
          <div>
            <button className="HomePage-submit" onClick={addPost}>
              Post
            </button>
          </div>
        </div>
        <ul className="post-list-container">
          {posts.map(val => (
            <li className="post-item">
              <p className="post-item head">
                {val.username} - {dayjs(val.createdAt).format("DD MMM YYYY")}
              </p>
              <p className="post-item title">{val.title}</p>
              <p className="post-item content">{val.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
