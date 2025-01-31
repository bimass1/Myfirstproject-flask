const input = document.getElementById("content");
document.getElementById("submit").addEventListener("click", (e) => {
  if (input.value == "") {
    e.preventDefault();
    alert("input masih kosong");
  }
});
