const buttons = document.querySelectorAll(".allBtu");
const delButtons = document.querySelectorAll(".del");
const display = document.querySelector(".display");
const equalBtn = document.querySelector(".btn-equal");
const onBtn = document.querySelector(".btn-on");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.innerHTML.trim();
  });
});

delButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML.trim() === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (btn.innerHTML.trim() === "AC") {
      display.value = "";
    }
  });
});

equalBtn.addEventListener("click", () => {
  try {
    let expression = display.value.replace(/\s+/g, "");
    expression = expression.replace(/%/g, "*0.01");
    let result = eval(expression);
    display.value = result === undefined ? "" : result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => (display.value = ""), 1500);
  }
});

onBtn.addEventListener("click", () => {
  display.value = "Hello";
});
