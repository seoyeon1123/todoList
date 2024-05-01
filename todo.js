const $ul = document.querySelector(".todoList");
const $text = document.querySelector(".inputTodo");
let todoCount = 0;

$text.addEventListener("keyup", (e) => {
  if (
    e.key !== "Enter" ||
    $text.value.trim() === "" ||
    $text.value.trim().length === 0 ||
    todoCount >= 8
  )
    return;

  const $newTodo = document.createElement("li");
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";
  $newTodo.appendChild($checkbox);

  const $label = document.createElement("label");
  $label.textContent = $text.value.trim();
  $newTodo.appendChild($label);

  $ul.appendChild($newTodo);
  $text.value = "";

  // todo 개수 증가
  todoCount++;

  // 체크박스의 상태가 변경될 때 이벤트를 처리
  $checkbox.addEventListener("change", () => {
    if ($checkbox.checked) {
      $label.style.textDecoration = "line-through";
    } else {
      $label.style.textDecoration = "none";
    }
  });
});
