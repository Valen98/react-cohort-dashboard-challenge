import logo from "../../assets/logo.svg";
import "./style.scss";
import UserIcon from "../profileIcon/ProfileIcon";

export default function Header() {
  return (
    <div className="headerParent">
      <div className="logoParent">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="userDiv">
        <UserIcon letters={"LW"}/>
      </div>
    </div>
  );
}
