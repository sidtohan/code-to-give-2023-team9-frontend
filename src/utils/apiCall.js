import axios from "axios";
const url = process.env.URL || "http://localhost:3000";

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
  const start = quesList.data.startPath["_path"]["segments"][3];
  quesList = quesList.data.docs;
  // Generate hashmap for navigating next
  const navigator = {};
  for (let ques in quesList) {
    if (!quesList[ques]["next"]) {
      quesList[ques].nextLink = null;
    } else if (quesList[ques].type !== "single-correct") {
      quesList[ques].nextLink = quesList[ques]["next"]["_path"]["segments"][3];
    }
    navigator[quesList[ques].id] = quesList[ques];
  }
  console.log(navigator);
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
