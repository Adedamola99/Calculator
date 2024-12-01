const buttons = document.querySelectorAll(".btn");
const inputBox = document.getElementById("input-box");
const calculate = document.getElementById("Equal-to");
const delBtn = document.querySelector(".delete");
const clearInputs = document.getElementById("reset");

buttons.forEach((button) => {
  button.addEventListener("click", getPressedButton);
});
calculate.addEventListener("click", calclateInputs);
delBtn.addEventListener("click", deleteInputs);
clearInputs.addEventListener("click", resetInput);

function getPressedButton(e) {
  let btnValue = e.target.dataset.value;

  if (btnValue === "." && inputBox.value.match(/[-+*\/]/g)) {
    let operandArray = inputBox.value.split(/[-+*\/]/g);
    for (i = 0; i < operandArray.length; i++) {
      if (operandArray[operandArray.length - 1].includes(".")) {
        console.log("WHAT AGAIN!!!!!!!");
        return false;
      }

      // disabling Pressing . multiple times after operand has been pressed
      else if (operandArray[operandArray.length - 1] === "") {
        btnValue = e.target.dataset.value2;
      }

      console.log("This does what!!!!!!!!!!!!");
      return (inputBox.value = (inputBox.value + btnValue).replace(/,/g, ""));
    }
  } else if (btnValue === "." && inputBox.value.includes(".")) {
    return;
  }

  // Putting 0. in front of every . pressed
  else if (btnValue === "." && inputBox.value === "") {
    btnValue = e.target.dataset.value2;
  }

  if (btnValue === "0" && inputBox.value.match(/[-+*\/]/g)) {
    let operandArr = inputBox.value.split(/[-+*\/]/g);
    for (i = 1; i < operandArr.length; i++) {
      if (operandArr[operandArr.length - 1] === "") {
        return;
      }

      return (inputBox.value = (inputBox.value + btnValue).replace(/,/g, ""));
    }
  } else if (btnValue === "0" && inputBox.value === "") {
    return;
  }

  if (btnValue.match(/[+*\/]/g) && inputBox.value.match(/[+*\/]/g)) {
    let operandArr = inputBox.value.split(/[+*\/]/g);
    for (i = 1; i < operandArr.length; i++) {
      if (operandArr[operandArr.length - 1] === "") {
        return;
      }

      return (inputBox.value = (inputBox.value + btnValue).replace(/,/g, ""));
    }
  }

  inputBox.value = inputBox.value + btnValue;
}

function calclateInputs() {
  if (inputBox.value === "") {
    inputBox.value = "";
  } else {
    let answer = inputBox.value;
    inputBox.value = eval(answer);
  }
}

function deleteInputs() {
  let screenDel = inputBox.value;
  inputBox.value = screenDel.substr(0, screenDel.length - 1);
}

function resetInput() {
  inputBox.value = "";
  inputBox.value = "";
}
