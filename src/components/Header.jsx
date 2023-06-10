import pic from "../assets/logo.png";
import "../css/Header.css";
function Header({ language }) {
  return (
    <div className="outer_box">
      <img src={pic} alt="Logo" className="logo"></img>
    </div>
  );
}

export default Header;
