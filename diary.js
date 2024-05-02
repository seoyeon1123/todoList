document.getElementById("emailContent").onfocus = function () {
  window.getSelection().removeAllRanges(); // 텍스트 선택 제거
};

// 이메일 입력 칸에 포커스가 들어왔을 때 기본 기능 비활성화
document.getElementById("recipientEmail").onfocus = function () {
  window.getSelection().removeAllRanges(); // 텍스트 선택 제거
};
