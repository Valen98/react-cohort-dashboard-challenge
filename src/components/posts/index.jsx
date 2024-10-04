import { useContext } from "react";
import CreatePost from "./Post/CreatePost";
import PostItem from "./Post/PostItem";
import { PostContext } from "../../App.jsx";

export default function PostBody() {
  const myContext = useContext(PostContext);

  return (
    <div className="postBody">
      <CreatePost posts={myContext.posts} setPosts={myContext.setPosts} />
      <div className="posts">
        {myContext.posts.toReversed().map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
