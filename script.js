function validateform() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name == null || name != "ABC") {
        alert("use ABC as username");
        return false;

    } else if (password == null || password != '123456') {
        alert("Password must be 123456");
        return false;
    }
}