function addData() {
  var Username = document.getElementById("username").value;
  var pass = document.getElementById("pwd").value;

  //   adding data to local storage

  localStorage.userName = Username;
  localStorage.userPwd = pass;
}
