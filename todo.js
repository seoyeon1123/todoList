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
  $checkbox.className = "custom-checkbox"; // 새로운 클래스 추가
  $newTodo.appendChild($checkbox);

  const $label = document.createElement("label");
  $label.textContent = $text.value.trim();
  $newTodo.appendChild($label);

  const $deleteButton = document.createElement("button"); // 새로운 삭제 버튼 생성
  $deleteButton.textContent = "❎"; // 삭제 아이콘 추가
  $deleteButton.className = "delete-button"; // 삭제 버튼에 클래스 추가
  $newTodo.appendChild($deleteButton); // 새로운 삭제 버튼을 할 일 요소에 추가

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

  // 삭제 버튼 클릭 이벤트 처리
  $deleteButton.addEventListener("click", () => {
    $ul.removeChild($newTodo); // 할 일 요소를 삭제
    todoCount--; // todo 개수 감소
  });
});
