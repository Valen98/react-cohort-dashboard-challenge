import { useEffect, useState } from "react";
import Comment from "./comment";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import InputField from "../../inputFields/InputFields";
import { Button } from "@mui/material";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/valen98/post/${postId}/comment`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    console.log("Wow");
    e.preventDefault();
    const newComment = {
      postId: postId,
      content: commentInput,
      contactId: 7,
    };

    await fetch(
      `https://boolean-uk-api-server.fly.dev/valen98/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        comments.push(data);
        setComments(comments);
        console.log(comments);
      });
  };
  return (
    <div className="commentsBody">
      <div className="commentHeader">
        <p>See previous comments</p>
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            setComments={setComments}
          />
        ))}
      </div>
      <div className="addCommentSection">
        <div className="commentProfileIcon">
          <ProfileIcon letters={"LW"} />
        </div>
        <InputField
          label={"Add a comment"}
          name={"addComment"}
          placeholder={"Add a comment"}
          id={"addComment"}
          type={"text"}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <Button
          className="createButton"
          variant="contained"
          onClick={handleSubmit}
        >
          Comment
        </Button>
      </div>
    </div>
  );
}
