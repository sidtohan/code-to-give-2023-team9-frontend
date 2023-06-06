import chatFormBot from "../assets/botForm.svg";
import arrow from "../assets/arrow.svg";
export default function ChatFormBot({ submitForm, answers }) {
  return (
    <div className="chat-form-bot">
      <img src={chatFormBot} alt="Bot" />
      <div className="form-button-holder">
        <button
          className="form-button"
          onClick={submitForm}
          disabled={answers.length == 0}
        >
          <img src={arrow} alt="Submit" />
        </button>
      </div>
    </div>
  );
}
