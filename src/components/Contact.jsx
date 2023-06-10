import "../css/Contact.css";
import phone from "../assets/phone-solid.png";
import email from "../assets/envelope-solid (2).png";

function Contact({ language }) {
  return (
    <div className="box">
      <h1 className="Heading">
        {language === "english"
          ? "Do you feel that you require counselling?"
          : "നിങ്ങൾക്ക് കൗൺസിലിംഗ് ആവശ്യമാണെന്ന് തോന്നുന്നുണ്ടോ?"}
      </h1>
      <p className="para">
        {language === "english"
          ? "It's okay to seek help. We are here for you. Reach out to us via: "
          : "സഹായം തേടുന്നതിൽ കുഴപ്പമില്ല. ഞങ്ങൾ നിങ്ങൾക്കായി ഇവിടെയുണ്ട്. ഇതുവഴി ഞങ്ങളെ ബന്ധപ്പെടുക:"}
      </p>
      <div className="help">
        <div className="contact-details">
          <img src={phone} alt="Phone icon" className="phone"></img>
          <p>0145137813</p>
        </div>
        <div className="contact-details">
          <img src={email} alt="Phone icon" className="phone"></img>
          <p>abs@breads.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
