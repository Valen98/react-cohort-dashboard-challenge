import { useContext, useEffect, useState } from "react";
import ProfileIcon from "../../profileIcon/ProfileIcon";
import { UserContext } from "../../../App";

export default function Comment({ comment }) {
  const { user } = useContext(UserContext)

  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");

  useEffect(() => {
    setFirstname(user.find(p => p.id === comment.contactId))
  }, []);

  return (
    <div className="commentBody">
      <div className="commentProfileIcon">
        <ProfileIcon
          letters={firstname.charAt(0) + lastName.charAt(0)}
          setFavouriteColour={favouriteColour}
        />
      </div>
      <div className="commentContent">
        <div className="commentName">
          <h4>
            {firstname} {lastName}
          </h4>
        </div>
        <div className="content">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
