import "../css/Fact.css";
import Wave from "../assets/wave.svg";

function Fact({ language }) {
  return (
    <>
      <div className="wave-container">
        <img src={Wave} alt="Wave" />
      </div>
      <div className="fact">
        <div className="new-div">
          <div>
            <h1 className="heading">
              {language === "english"
                ? "YOU GOT THIS"
                : "നിങ്ങൾക്ക് ഇത് മനസ്സിലായി"}
            </h1>
            <p className="fact-description">
              {language === "english"
                ? `Unlock the transformative power of addiction counseling! Embrace a
          brighter future as it fuels hope, ignites inner strength, mends broken
          bonds, and guides you towards a life filled with purpose, joy, and
          boundless possibilities. Take the courageous step towards healing
          today!`
                : `ആസക്തി കൗൺസിലിംഗിന്റെ പരിവർത്തന ശക്തി അൺലോക്ക് ചെയ്യുക! ആലിംഗനം എ
          ശോഭനമായ ഭാവി പ്രത്യാശ പകരുന്നു, ആന്തരിക ശക്തിയെ ജ്വലിപ്പിക്കുന്നു, തകർന്നുകിടക്കുന്നു
          ലക്ഷ്യവും സന്തോഷവും നിറഞ്ഞ ജീവിതത്തിലേക്ക് നിങ്ങളെ ബന്ധപ്പെടുത്തുകയും നയിക്കുകയും ചെയ്യുന്നു
          അതിരുകളില്ലാത്ത സാധ്യതകൾ. രോഗശാന്തിയിലേക്ക് ധീരമായ ചുവടുവെപ്പ് നടത്തുക
          ഇന്ന്!`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fact;
