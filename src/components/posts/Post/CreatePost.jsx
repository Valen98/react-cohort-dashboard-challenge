import ProfileIcon from "../../profileIcon/ProfileIcon";
import "../style.scss";
import InputField from "../../inputFields/InputFields";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { PostContext } from "../../../App";

export default function CreatePost({ posts, setPosts }) {
  const postContext = useContext(PostContext);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    console.log("Wow");
    e.preventDefault();
    const newPost = {
      title: "My own posts",
      content: input,
      contactId: 7,
    };

    await fetch("https://boolean-uk-api-server.fly.dev/valen98/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        postContext.posts.push(data);
        postContext.setPosts(postContext.posts);
        console.log(postContext.posts);
      });
  };

  return (
    <div className="createPostParent">
      <div className="createPost">
        <div className="profileIconDiv">
          <ProfileIcon letters={"LW"} />
        </div>
        <div className="actionDiv">
          <form onSubmit={handleSubmit} className="createPostForm">
            <InputField
              label="createPost"
              id="createPost"
              name="createPost"
              placeholder="What's on your mind?"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              className="createButton"
              onClick={handleSubmit}
              variant="contained"
            >
              Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
