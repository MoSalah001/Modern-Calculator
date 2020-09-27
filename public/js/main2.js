window.onload = () => {
  const test = document.getElementsByTagName("input");
  const finres = document.getElementById("finres");
  const res = document.getElementById("res");
  let m,
    v = "",
    h;

  function operators() {
    m = this.value;
    h = finres.value;
    finres.value = "";
  }

  function values() {
    v = this.value;
    finres.value += v;
  }

  function result() {}

  for (let i = 0; i < test.length - 14; i++) {
    test[i].addEventListener("click", operators);
  }

  for (let i = 4; i < test.length - 3; i++) {
    test[i].addEventListener("click", values);
  }
  test[16].addEventListener("click", result);
};
