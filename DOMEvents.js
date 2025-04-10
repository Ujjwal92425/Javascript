let btn = document.getElementById("btn1");
btn.onclick = function () {
  alert("You have clicked the button");
};

let box = document.querySelector(".box1");
box.onmouseenter = function () {
  console.log("You entered in box");
};

let btn2 = document.getElementById("btn2");
let interval;

btn2.onclick = function () {
  let uinput = document.getElementById("UserName");
  if (interval) {
    clearInterval(interval); 
}

  interval = setInterval(() => {
    let data = uinput.value;
    alert("Your have entered " + data);
  }, 4000);
};
