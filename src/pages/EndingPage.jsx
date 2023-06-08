import { motion } from "framer-motion";
import Header from "../components/Header.jsx";
import Image from "../components/Image.jsx";
import Contact from "../components/Contact.jsx";
import Fact from "../components/Fact.jsx";
import "../css/ending_page.css";

function EndingPage({ variants }) {
  return (
    <motion.div
      className="container-ending"
      variants={variants}
      initial="initial"
      exit="exit"
      animate="animate"
    >
      <Header></Header>
      <Image></Image>
      <Contact></Contact>
      <Fact></Fact>
    </motion.div>
  );
}

export default EndingPage;
