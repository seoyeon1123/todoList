const $ul = document.querySelector(".todoList");
const $text = document.querySelector(".inputTodo");

$text.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") return;

  const $newTodo = document.createElement("li");
  $newTodo.textContent = e.target.value;
  $ul.appendChild($newTodo);

  // 입력 필드 비우기
  e.target.value = "";
});
