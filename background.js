function updateForm(m) {
  $('#x').text(m.x);
  $('#y').text(m.y);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendRepsonse) {
  console.log(message);
  updateForm(message);
});