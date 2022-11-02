let body = document.querySelector("body");
let div = document.querySelector(".toDolist");
let ul = document.querySelector("ul");
let input = document.querySelector(".input");
let array = [];
let flag = true;

function show() {
  array.forEach((item) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");
    btn.classList.add("butn");
    btn.style.width = "35px";
    btn.style.height = "35px";
    ul.append(li);
    span.innerText = item;
    li.append(span);
    li.append(btn);
  });

  const button = document.querySelectorAll(".butn");
  button.forEach((item) => {
    item.addEventListener("click", function (ev) {
      ev.target.parentElement.remove();
      let i = ev.target.previousElementSibling.innerText;
      console.log(ev.target.previousElementSibling);
      console.log(i);
      array = array.filter((item) => {
        return item != i ? item : null;
      });
      console.log(array);
    });
  });
}

function add() {
  if (input.value != "" && input.value == +input.value) {
    array.push(+input.value);
    console.log("num");
  } else if (input.value != "" && input.value != +input.value) {
    array.push(input.value);
    console.log("string");
  }
  console.log(array);
  ul.innerHTML = " ";
  show();
}

function sort() {
  ul.innerHTML = "";

  if (flag === true) {
    array.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    flag = false;
  } else {
    array.sort((a, b) => {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
    flag = true;
  }

  console.log(array);
  show();
}

document.querySelector(".sort").addEventListener("click", sort);

function click() {
  document.querySelector(".add").addEventListener("click", add);
}
click();
