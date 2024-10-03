import { useEffect, useState } from "react";
import InputField from "../../inputFields/InputFields";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import Comments from "../comments/comments";
import { Button } from "@mui/material";

export default function PostItem({ post }) {
  const [firstname, setFirstname] = useState("")
  const [lastName, setLastName] = useState("")
  const [favouriteColour, setFavouriteColour] = useState("")

  const fetchUser = () => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/valen98/contact/${post.contactId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFirstname(data.firstName)
        setLastName(data.lastName)
        setFavouriteColour(data.favouriteColour)
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="postItemParent">
      <div className="postOwner">
        <div className="ownerIcon">
          <ProfileIcon letters={firstname.charAt(0) + lastName.charAt(0)} setFavouriteColour={favouriteColour}/>
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
        <Comments postId={post.id}/>
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
          onChange={(e) => console.log(e)}
        />
        <Button className="createButton" variant="contained">
          Comment
        </Button>
      </div>
    </div>
  );
}
