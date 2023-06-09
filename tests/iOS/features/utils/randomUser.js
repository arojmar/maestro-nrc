function email() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var email = '';
    for (var i = 0; i < 10; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '@example.com';
    return email;
}
  
function password() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var password = '';
    for (var i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
  
  output.randomUser = {
    email: email(),
    password: password()
  };


 