class Person {
    u: string;
    p: String;
    constructor(public user: string, public pw: String){
        this.u = user;
        this.p = pw;
    }
}

let arrayUser: Array<Person> = [];

//For demonstration purposes because I don't wanna use SQL
var p = new Person("N8Budiman", "1234");

arrayUser.push(p);


$(function(){
    $("#btnEnter").click(function(){
        $('#lbl1').text("");
        let user = $("#txtUser").val();
        let password = $("#txtPW").val();
        if (traverse(user, password) == true)
            window.location.replace("pageTwo.html");
        else
            $('#lbl1').text("Incorrect Username/Password");
    });

    function traverse (userName: any, passWord: any ){
        for(let element of arrayUser){
            if (element.user === userName && element.pw == passWord)
                return true;
        }
        return false;
    }
})
