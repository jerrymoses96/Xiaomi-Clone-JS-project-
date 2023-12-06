function checkData() {
    var enterUsername = document.getElementById("username").value;
    var enterPass = document.getElementById("pwd").value;

    // GETTING DATA FROM LOCAL STORAGE 
    var getUsername = localStorage.getItem('userName');
    var getPass = localStorage.getItem('userPwd');
    if (enterUsername == getUsername) {
        if(enterPass == getPass ){
            alert("Login Successful");
        }
        else{
            alert("Invalid Password");
        }
        
    }
    else{
        alert("User not found");
    }
}