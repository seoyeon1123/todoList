function sendEmail() {
  // textarea에서 이메일 내용 가져오기
  var emailContent = document.getElementById("emailContent").value;
  // input에서 수신자 이메일 주소 가져오기
  var recipientEmail = document.getElementById("recipientEmail").value;

  // AJAX 요청을 사용하여 서버로 데이터 전송
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5501/send-email", true); // 서버 주소 변경
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Email has been sent successfully.");
      } else {
        alert("Failed to send email. Please try again later.");
      }
    }
  };
  var data = JSON.stringify({
    content: emailContent,
    recipient: recipientEmail,
  });
  xhr.send(data);
}
