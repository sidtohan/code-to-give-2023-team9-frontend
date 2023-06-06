import Header from "../components/Header.jsx";
import Image from "../components/Image.jsx";
import Contact from "../components/Contact.jsx";
import Fact from "../components/Fact.jsx";
import "../css/ending_page.css";

function EndingPage() {
  return (
    <div className="container">
      <Header></Header>
      <Image></Image>
      <Contact></Contact>
      <Fact></Fact>
    </div>
  );
}

export default EndingPage;
