import '../css/Image.css'
import pic from "../assets/Bot.svg";

function Image(){
    return (
        <div className='outer'>
            <div className='circle-outline'>
                <img src={pic} alt = "Logo" className='bot_imgg'></img>
            </div>
            <h3 className='ThankYou'>Thank your patience.</h3>
        </div>
    );

}

export default Image;