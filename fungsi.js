var buttons = [];
var isNotificationShown = false;

for (var i = 1; i <= 9; i++) {
  buttons.push(document.getElementById("angka" + i));
}

function cekbtn(btn1, btn2) {
  if (btn2.value == "") {
    btn2.value = btn1.value;
    btn1.value = "";
  }
}

function btnClick(index) {
  var adjacentIndexes = {
    1: [2, 4],
    2: [1, 3, 5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 4, 6, 8],
    6: [3, 5, 9],
    7: [4, 8],
    8: [5, 7, 9],
    9: [6, 8],
  };

  adjacentIndexes[index].forEach((i) => {
    cekbtn(buttons[index - 1], buttons[i - 1]);
  });
  checkWin();
}

function bubbleSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function simpleShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function acak() {
  var values = buttons
    .map((button) => button.value)
    .filter((value) => value !== "");
  bubbleSort(values);
  simpleShuffle(values);
  values.push("");

  for (var k = 0; k < buttons.length; k++) {
    buttons[k].value = values[k];
    buttons[k].classList.remove("incorrect");
  }

  var notification = document.getElementById("notification");
  notification.textContent = "Puzzle telah diacak!";
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

function checkWin() {
  var values = buttons.map((button) => button.value);
  var isWin = true;

  for (var i = 0; i < values.length; i++) {
    if (values[i] === "") {
      buttons[i].classList.remove("incorrect");
    } else if (values[i] !== (i + 1).toString()) {
      buttons[i].classList.add("incorrect");
      isWin = false;
    } else {
      buttons[i].classList.remove("incorrect");
    }
  }

  if (isWin && values[values.length - 1] === "") {
    var winNotification = document.getElementById("winNotification");
    winNotification.textContent =
      "Selamat! Anda Mendapatkan iPhone 14 Pro Max!!🎁";
    winNotification.classList.add("show");

    setTimeout(() => {
      winNotification.classList.remove("show");
    }, 5000);
  }
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => btnClick(index + 1));
});

document.getElementById("acakButton").addEventListener("click", acak);
