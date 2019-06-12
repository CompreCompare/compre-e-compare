function usuario(){
    var log=document.form1.txtEmail.value;
    var senha=document.form1.pswSenha.value;
    if (log=="Larissa@gmail.com" && senha=="1234") {
    	window.location.replace("_usuario/user_1.html");
    }else if (log=="Jian_mateus@outlook.com" && senha=="123abc") {
    	window.location.replace("_usuario/user_2.html");
    }
}