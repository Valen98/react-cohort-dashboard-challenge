import ProfileIcon from "../../profileIcon/ProfileIcon";
import "../style.scss";
import InputField from "../../inputFields/InputFields";
import { Button } from "@mui/material";
export default function CreatePost() {
  return (
    <div className="createPostParent">
      <div className="createPost">
        <div className="profileIconDiv">
          <ProfileIcon letters={"LW"}/>
        </div>
        <div className="actionDiv">
          <InputField
            label="hej"
            id="hej"
            name="hej"
            placeholder="What's on your mind?"
            type="text"
            onChange={(e) => console.log(e)}
          />
          <Button className="createButton" variant="contained">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
