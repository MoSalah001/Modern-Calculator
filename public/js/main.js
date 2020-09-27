window.onload = () => {
  const test = document.getElementsByTagName("input");
  const finres = document.getElementById("finres");
  const res = document.getElementById("res");
  let m, o;
  for (let i = 0; i < test.length; i++) {
    if (i == 16) {
      test[i].addEventListener("click", equal);
    }
    if (i == 15) {
      test[i].addEventListener("click", clear);
    }
    if (i == 3) {
      test[i].addEventListener("click", add);
    }
    if (i == 2) {
      test[i].addEventListener("click", minus);
    }
    if (i == 1) {
      test[i].addEventListener("click", multi);
    }
    if (i == 0) {
      test[i].addEventListener("click", divi);
    }
    if (i >= 4 && i <= 14) {
      test[i].addEventListener("click", values);
    }
  }

  function equal() {
    if (o == "-") {
      test[19].value = m - test[17].value;
    }
    if (o == "*") {
      test[19].value = m * test[17].value;
    }
    if (o == "/") {
      test[19].value = m / test[17].value;
    }
    if (o == "+") {
      test[19].value = Number(m) + Number(test[17].value);
    }
  }

  function values() {
    test[17].value += this.value;
  }

  function add() {
    m = test[17].value;
    o = "+";
    test[18].value = test[17].value + " " + "+";
    test[17].value = "";
  }

  function minus() {
    m = test[17].value;
    o = "-";
    test[18].value = test[17].value + " " + "-";
    test[17].value = "";
  }

  function multi() {
    m = test[17].value;
    o = "*";
    test[18].value = test[17].value + " " + "*";
    test[17].value = "";
  }

  function divi() {
    m = test[17].value;
    o = "/";
    test[18].value = test[17].value + " " + "/";
    test[17].value = "";
  }

  function clear() {
    test[18].value = "";
    test[17].value = "";
  }
};
