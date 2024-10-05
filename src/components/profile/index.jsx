import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import "./style.scss";
import ProfileIcon from "../profileIcon/ProfileIcon";
import InputField from "../inputFields/InputFields";

export default function ProfilePage() {
  const { users } = useContext(UserContext);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");

  const { id } = useParams();

  const fetchUser = async () => {
    const user = await users.find((u) => u.id === parseInt(id));
    setFirstname(user.firstName);
    setLastName(user.lastName);
    setFavouriteColour(user.favouriteColour);
  };

  useEffect(
    () =>
      async function () {
        await fetchUser();
      },
    []
  );

  return (
    <div className="profilePageMain">
      <div className="profileBody">
        <div className="banner">
          <div className="profileIcon">
            <ProfileIcon
              letters={firstName.charAt(0) + lastName.charAt(0)}
              setFavouriteColour={favouriteColour}
            />
          </div>
          <div className="nameBanner">
            <h1>Dummy Data</h1>
          </div>
        </div>
        <div className="lines">
          <hr className="halfLine" />
          <hr className="halfLine" />
        </div>
        <div className="formBody">
          <form className="profileForm">
            <div className="leftFormBody">
              <h2>Account info</h2>
              <InputField
                label={"First name"}
                id={"firstName"}
                name={"First Name"}
                placeholder={"First Name"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"Last name"}
                id={"lastName"}
                name={"last Name"}
                placeholder={"last Name"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"username"}
                id={"username"}
                name={"username"}
                placeholder={"Username"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"email"}
                id={"email"}
                name={"email"}
                placeholder={"Email"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="rightFormBody">
              <h2>Address</h2>
              <InputField
                label={"street"}
                id={"street"}
                name={"street"}
                placeholder={"street"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"suit"}
                id={"suit"}
                name={"suit"}
                placeholder={"Suit"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"city"}
                id={"city"}
                name={"city"}
                placeholder={"City"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
              <InputField
                label={"zipcode"}
                id={"zipcode"}
                name={"zipcode"}
                placeholder={"Zipcode"}
                type={"text"}
                onChange={(e) => console.log(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
