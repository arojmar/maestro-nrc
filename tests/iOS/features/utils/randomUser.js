function randomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '@example.com';
    return email;
}
  
function randomPassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
  
output.random_user = {
    username : randomEmail(),
    password : randomPassword()
}

 