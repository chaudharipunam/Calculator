let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let input = "";

function updateDisplay() {
  display.innerText = input.slice(-10);
}

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    let key = e.target.innerText;

    if (key === "AC") {
      input = "";
    } 
    else if (key === "=") {
      try {
        let res = eval(input);
        input = res.toString();
      } catch {
        input = "Error"; 
      }
    } else if (key === "del") {
      input = input.slice(0, -1);
    } else {
      if (input === "0" && key !== ".") {
        input = key;
      } else {
        input += key;
      }
    }
    updateDisplay();
  });
});
