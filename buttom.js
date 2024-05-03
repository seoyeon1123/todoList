function sendEmail() {
  var emailContent = document.getElementById("emailContent").value;
  var recipientEmail = document.getElementById("recipientEmail").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5501/send-email", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("이메일을 성공적으로 보냈습니다.");
      } else {
        alert("이메일 보내기에 실패했습니다. 나중에 다시 시도해주세요.");
      }
    }
  };
  var data = JSON.stringify({
    content: emailContent,
    recipient: recipientEmail,
  });
  xhr.send(data);
}
