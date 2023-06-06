import '../css/Contact.css'
import phone from "../assets/phone-solid.png";
import email from "../assets/envelope-solid (2).png";

function Contact(){
    return (
        <div className='box'>
            <h1 className='Heading'>Do you feel that you require counselling?</h1>
            <p className='para'>It's okay to seek help. We are here for you. Reach out to us via: </p>
            <div className='help'>
                <div className='contact-details'>
                    <img src={phone} alt='Phone icon' className='phone'></img>
                    <p>0145137813</p>
                </div>
                <div className='contact-details'>
                    <img src={email} alt='Phone icon' className='phone'></img>
                    <p>abs@breads.com</p>
                </div>
            </div>
        </div>
    );

}

export default Contact;