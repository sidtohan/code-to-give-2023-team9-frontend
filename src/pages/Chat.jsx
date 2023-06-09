import "../css/Chat.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";
import ChatForm from "../components/ChatForm";
import { useNavigate } from "react-router-dom";
import { fetchQuestions, gptCall, submitResponse } from "../utils/apiCall";

export default function Chat({ variants, language }) {
  // Page for Chat
  // States and Constants
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      question: "Hello! Your responses will appear here.",
      answers: ["Alright"],
    },
  ]);
  const [question, setQuestion] = useState({
    text: "Welcome to the Chat. Select the below option to begin",
    type: "option",
    options: ["Yes"],
    nextLink: 1,
    isModifiable: false,
  });

  const [questionList, setQuestionList] = useState({
    1: question,
  });
  const [userInfo, setUserInfo] = useState({});
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const messageHolderRef = useRef();
  const endingPage = () => navigate("/ending");

  // Set new question
  useEffect(() => {
    messageHolderRef.current.scrollTop = messageHolderRef.current.scrollHeight;
    if (question.nextLink === null) {
      // Ends here
      (async () => {
        await submitResponse(userInfo, "ZSPZlxOBzx7gFrcGlIwM");
        endingPage();
      })();
    } else {
      setLoading(true);
      const nextQ = { ...questionList[question.nextLink] };
      if (language === "english" && nextQ.isModifiable === true) {
        (async () => {
          delete nextQ["next"];
          delete nextQ["nextLink"];
          delete nextQ["key"];
          delete nextQ["required"];
          nextQ.text = nextQ.text[language];
          if (
            nextQ.type === "multi-correct" ||
            nextQ.type === "single-correct"
          ) {
            nextQ.options = [];
            console.log(questionList[question.nextLink]);
            if (nextQ.type === "multi-correct") {
              for (let option in questionList[question.nextLink].options) {
                nextQ.options.push(
                  questionList[question.nextLink].options[option][language]
                );
              }
            } else {
              for (let option in questionList[question.nextLink].options) {
                nextQ.options.push(
                  questionList[question.nextLink].options[option].option[
                    language
                  ]
                );
              }
            }
          }
          const responseData = {
            text: question.text[language],
            type: question.type,
          };
          if (question.type === "multi-correct") {
            responseData.options = [];
            for (let option in question.options) {
              responseData.options.push(question.options[option][language]);
            }
            responseData.response = answers;
          } else if (question.type === "single-correct") {
            responseData.options = [];
            for (let option in question.options) {
              responseData.options.push(
                question.options[option].option[language]
              );
            }
            responseData.response = answers[0];
          } else if (question.type === "text") {
            responseData.response = answers[0];
          } else {
            responseData.minLength = question.minLength;
            responseData.maxLength = question.maxLength;
            responseData.response = answers[0];
          }
          nextQ.prevData = responseData;
          const newQuestion = await gptCall(nextQ);
          questionList[question.nextLink].text[language] = newQuestion;
          setQuestion(questionList[question.nextLink]);
          setAnswers([]);
          setLoading(false);
        })();
      } else {
        (async () => {
          const delay = (ms) => new Promise((res) => setTimeout(res, ms));
          setQuestion(nextQ);
          setAnswers([]);
          await delay(500);
          setLoading(false);
        })();
      }
    }
  }, [messages]);

  // Initial Call
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { start, navigator } = await fetchQuestions("ZSPZlxOBzx7gFrcGlIwM");
      setQuestionList(navigator);
      setQuestion(navigator[start]);
      setLoading(false);
    })();
    return () => {
      // anything like loading etc
    };
  }, []);
  return (
    <motion.div
      className="chat"
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
      <ChatHeader />
      <ChatMessageHolder messages={messages} ref={messageHolderRef} />
      <ChatForm
        question={question}
        setQuestion={setQuestion}
        messages={messages}
        setMessages={setMessages}
        messageHolderRef={messageHolderRef}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        answers={answers}
        setAnswers={setAnswers}
        loading={loading}
        language={language}
      />
    </motion.div>
  );
}
