var Person = /** @class */ (function () {
    function Person(user, pw) {
        this.user = user;
        this.pw = pw;
        this.u = user;
        this.p = pw;
    }
    return Person;
}());
var arrayUser = [];
//For demonstration purposes because I don't wanna use SQL
var p = new Person("N8Budiman", "1234");
arrayUser.push(p);
$(function () {
    $("#btnEnter").click(function () {
        $('#lbl1').text("");
        var user = $("#txtUser").val();
        var password = $("#txtPW").val();
        if (traverse(user, password) == true)
            window.location.replace("pageTwo.html");
        else
            $('#lbl1').text("Incorrect Username/Password");
    });
    function traverse(userName, passWord) {
        for (var _i = 0, arrayUser_1 = arrayUser; _i < arrayUser_1.length; _i++) {
            var element = arrayUser_1[_i];
            if (element.user === userName && element.pw == passWord)
                return true;
        }
        return false;
    }
});
