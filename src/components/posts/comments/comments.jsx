import { useEffect, useState } from "react";
import Comment from "./comment";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
        `https://boolean-uk-api-server.fly.dev/valen98/post/${postId}/comment`
      )
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
        });
  }, []);

  console.log(comments)
  return (
    <div className="commentsBody">
      <div className="commentHeader">
        <p>See previous comments</p>
      </div>
      <div className="comments">
        {comments.map(comment => (
            <Comment comment={comment}/>
        ))}
      </div>
    </div>
  );
}
