function logar(){
    var log=document.form1.txtLogin.value;
    var senha=document.form1.pswSenha.value;
    if (log=="Larissa@gmail.com" && senha=="4321") {
    	window.location.replace("../produtos/user1.html");
    }else if (log=="Jian_mateus@outlook.com" && senha=="abc123") {
    	window.location.replace("../produtos/user2.html");
    }
}