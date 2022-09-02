let nameValue = document.querySelector(".qu1-answer");
const questionBody = document.querySelector(".question-body");
const natureRadioBtn1 = document.querySelector(".qu2-answer");
const natureRadioBtn2 = document.querySelector(".qu3-answer");
const typeRadioBtn1 = document.querySelector("#typeRadioBtn1");
const typeRadioBtn2 = document.querySelector("#typeRadioBtn2");
let placeValue = document.querySelector(".qu6-answer");
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
let numQuestion = 0;
let natureLoop = 0;
let typeLoop = 0;
let nameLoop = 0;
let placeLoop = 0;
let i = 0;

// name text value

nameValue.addEventListener("click", () => {
  if (nameValue.value.length >= 3) {
    for (nameLoop; nameLoop < 1; nameLoop++) {
      numQuestionIncrease();
    }
  }
});

// natureRadioBtn

natureRadioBtn1.addEventListener("click", () => {
  if (natureRadioBtn1.checked == true) {
    for (natureLoop; natureLoop < 1; natureLoop++) numQuestionIncrease();
  }
});

natureRadioBtn2.addEventListener("click", () => {
  if (natureRadioBtn2.checked == true) {
    for (natureLoop; natureLoop < 1; natureLoop++) numQuestionIncrease();
  }
});

// typeRadioBtn

typeRadioBtn1.addEventListener("click", () => {
  if (typeRadioBtn1.checked == true) {
    for (typeLoop; typeLoop < 1; typeLoop++) numQuestionIncrease();
  }
});

typeRadioBtn2.addEventListener("click", () => {
  if (typeRadioBtn2.checked == true) {
    for (typeLoop; typeLoop < 1; typeLoop++) numQuestionIncrease();
  }
});

// place text value

placeValue.addEventListener("click", () => {
  if (placeValue.value.length >= 3) {
    for (placeLoop; placeLoop < 1; placeLoop++) {
      numQuestionIncrease();
    }
  }
});

// select

select1.addEventListener("click", () => {
  if (select1.value != select1[0].value) {
    for (i; i < 1; i++) {
      numQuestionIncrease();
    }
  }
  i = 0;
});
select2.addEventListener("click", () => {
  if (select2.value != select2[0].value) {
    for (i; i < 1; i++) {
      numQuestionIncrease();
    }
  }
  i = 0;
});

function btnclicked() {
  alert("not Working");
}

// When we add a new question, we run this function (numQuestionIncrease())

function numQuestionIncrease() {
  numQuestion = 1 + numQuestion;
  let progressValue = 100 / numQuestion;
  progress(progressValue);
}

// Yes, I know that the progress bar is not working properly because we don't know how many queries are being used as per the terms and conditions
//  if we know how many queries are being used. so that we can easily fix it.

// any other way i need more time to think and fix it

function progress(value) {
  const progressColorSeletor = document.querySelector(".progress-bar-color");
  let progressColorSeletorCs = window
    .getComputedStyle(progressColorSeletor)
    .getPropertyValue("width");
  console.log(progressColorSeletorCs);
  progressColorSeletor.style.setProperty("width", `${value}%`);
}
