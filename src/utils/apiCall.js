import axios from "axios";
const url = process.env.URL || "http://localhost:3000";

export const fetchQuestions = async (formID) => {
  // Add logic for fetching from API here
  // const quesList = await axios.get(url + "/form", {
  //   params: {
  //     formID,
  //   },
  // });
  const quesList = [
    {
      id: 1,
      text: "What is your age?",
      type: "text",
      required: true,
      dataType: "number",
      key: "age",
      next: 2,
    },
    {
      id: 2,
      text: "What locality do you belong from?",
      type: "single-correct",
      required: true,
      options: [
        { option: "XYZ", next: null },
        { option: "ABC", next: 3 },
        { option: "DEF", next: 1 },
      ],
      key: "locality",
      next: 3,
    },
    {
      id: 3,
      text: "What substance do you abuse?",
      type: "multi-correct",
      required: true,
      options: ["Alcohol", "Tobacco"],
      key: "substance_abused",
      next: null,
    },
  ];
  // Generate hashmap for navigating next
  const navigator = {};
  for (let ques in quesList) {
    navigator[quesList[ques].id] = quesList[ques];
  }
  const start = 1;
  return { start, navigator };
};
