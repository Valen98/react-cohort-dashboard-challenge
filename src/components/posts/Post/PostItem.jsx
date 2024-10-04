import { useContext, useEffect, useState } from "react";
import InputField from "../../inputFields/InputFields";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import Comments from "../comments/comments";
import { UserContext } from "../../../App";

export default function PostItem({ post }) {
  const userContext = useContext(UserContext);
  const [firstname, setFirstname] = useState("M");
  const [lastName, setLastName] = useState("T");
  const [favouriteColour, setFavouriteColour] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const fetchUser = () => {
    const user = userContext.users.find((u) => u.id === post.contactId);

    setFirstname(user.firstName);
    setLastName(user.lastName);
    setFavouriteColour(user.favouriteColour);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  

  return (
    <div className="postItemParent">
      <div className="postOwner">
        <div className="ownerIcon">
          <ProfileIcon
            letters={firstname.charAt(0) + lastName.charAt(0)}
            setFavouriteColour={favouriteColour}
          />
        </div>
        <div className="postName">
          <div className="name">
            <h2>
              {firstname} {lastName}
            </h2>
          </div>
          <div className="title">
            <h3>{post.title}</h3>
          </div>
        </div>
      </div>
      <div className="postContent">
        <p>{post.content}</p>
      </div>
      <hr className="line" />
      <div className="commentSection">
        <Comments postId={post.id} />
      </div>
    </div>
  );
}
