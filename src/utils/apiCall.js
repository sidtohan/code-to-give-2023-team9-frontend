export const fetchQuestions = async () => {
  // Add logic for fetching from API here
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
      type: "multi-correct",
      required: true,
      options: [
        { option: "XYZ", next: null },
        { option: "ABC", next: null },
        { option: "DEF", next: null },
      ],
      key: "locality",
      next: 3,
    },
    {
      id: 3,
      text: "What substance do you abuse?",
      type: "single-correct",
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
