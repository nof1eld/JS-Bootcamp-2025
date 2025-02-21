const questions = document.querySelectorAll(".question-container");
const buttons = document.querySelectorAll(".button");
const answers = document.querySelectorAll(".answer");

questions.forEach((questions, index) => {
  let isExpanded = false;
  questions.addEventListener("click", () => {
    if (!isExpanded) {
      answers[index].classList.toggle("active");
      buttons[index].src = "/challenge-1/assets/images/icon-minus.svg";
      isExpanded = true;
    } else {
      answers[index].classList.remove("active");
      buttons[index].src = "/challenge-1/assets/images/icon-plus.svg";
      isExpanded = false;
    }
    console.log("hello");
  });
});
