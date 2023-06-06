import Header from '../components/Header.js';
import Image from '../components/Image.js';
import Contact from '../components/Contact.js';
import Fact from '../components/Fact.js';
import '../css/ending_page.css';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Image></Image>
      <Contact></Contact>
      <Fact></Fact>
    </div>
  );
}

export default App;
