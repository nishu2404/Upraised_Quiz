// services/api.js
const BASE_URL = "https://jsonplaceholder.typicode.com"; // Replace with your API URL

export const startQuiz = async () => {
  const response = await fetch(`${BASE_URL}/quiz/start`);
  return response.json();
};

export const submitAnswer = async (questionId, answer) => {
  const response = await fetch(`${BASE_URL}/quiz/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ questionId, answer }),
  });
  return response.json();
};

export const finishQuiz = async () => {
  const response = await fetch(`${BASE_URL}/quiz/finish`);
  return response.json();
};
// axios read krta h json file API ki trah

// date.now se difference
