import axios from "axios";
const url = process.env.URL || "https://code-to-give.onrender.com";

export const gptCall = async (prevQuestion) => {
  // Send question to GPT
  const sendObject = { ...prevQuestion };
  const modifiedQues = await axios.post(url + "/gpt", sendObject);
  return modifiedQues.data.modifiedQues;
};
export const fetchQuestions = async (formID) => {
  // Add logic for fetching from API here
  let quesList = await axios.get(url + "/form", {
    params: {
      formID,
    },
  });
  const start = quesList.data.startPath;
  quesList = quesList.data.docs;
  // Generate hashmap for navigating next
  const navigator = {};
  for (let ques in quesList) {
    if (!quesList[ques]["next"]) {
      quesList[ques].nextLink = null;
    } else if (quesList[ques].type !== "single-correct") {
      quesList[ques].nextLink = quesList[ques]["next"];
    }
    navigator[quesList[ques].id] = quesList[ques];
  }
  return { start, navigator };
};

export const submitResponse = async (userInfo, formID) => {
  // Logic for submitting form
  await axios.post(
    url + "/submit",
    {
      response: userInfo,
    },
    {
      params: {
        formID,
      },
    }
  );
};
