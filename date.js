const today = new Date();
const options = {
  year: "numeric", // 년도를 숫자로 표시
  month: "2-digit", // 월을 2자리 숫자로 표시 (0으로 채움)
  day: "2-digit", // 일을 2자리 숫자로 표시 (0으로 채움)
};

const formattedDate = today.toLocaleDateString("ko-KR", options);
document.getElementById("todaysDate").textContent = formattedDate;
