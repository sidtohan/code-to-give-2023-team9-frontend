import "../css/Image.css";
import pic from "../assets/Bot.svg";

function Image({ language }) {
  return (
    <div className="outer">
      <div className="circle-outline">
        <img src={pic} alt="Logo" className="bot_imgg"></img>
      </div>
      <h3 className="ThankYou">
        {language === "english"
          ? "Thank your patience"
          : "നിങ്ങളുടെ ക്ഷമയ്ക്ക് നന്ദി"}
      </h3>
    </div>
  );
}

export default Image;
