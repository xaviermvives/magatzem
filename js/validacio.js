window.onload = iniciar1;

function iniciar1 () {
    document.getElementById("enviarSearch").addEventListener('click', validarBuscar, false);
    document.getElementById("enviarLogin").addEventListener('click', validar2, false);
    document.getElementById("enviarRegistre").addEventListener('click', validar3, false);
}  

/////////////////////////////////////////////////////
//validació Search:
function validarBuscar(e){
    var buscar = document.getElementById('buscar')
    var buscarValue = buscar.value;
    var errorMissatge = document.getElementById("mysearchhint");
    if(buscarValue !== "" && buscarValue.length > 3){
        return true;
    }else{
        e.preventDefault();
        errorMissatge.innerHTML = "La cerca és obligatòria i ha de tenir més de tres caràcters";
        buscarValue = "";
        buscar.className="error";
        buscar.focus();
        return false;
    }
}   
////////////////////////////////////////////////////
//validació Login:
function validarEmailLogin(){
    var elemento = document.getElementById("emailLogin");
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(elemento.value === ""){
        errorLogin2(elemento);
        return false;
    }else if(!regex.test(elemento.value)){
        errorLogin(elemento);
        return false;
    }else {
        return true;
    }
    
}

function errorLogin (elemento) {
    document.getElementById("mensajeErrorEmail1").innerHTML= "Email incorrecte, torna";
    elemento.className="error";
    elemento.focus();
}

function errorLogin2(elemento) {
    document.getElementById("mensajeErrorEmail1").innerHTML = "Omple el camp email";
    elemento.className="error";
    elemento.focus();
}

function validarPasswordLogin () {
    var motdepas = document.getElementById("passwordLogin");
    if(motdepas.value == ""){
        document.getElementById("mensajeErrorPassword").innerHTML= "Omple el camp amb el password.";
        document.getElementById("passwordLogin").className="error";
        document.getElementById("passwordLogin").focus();
    }else{
        return true;
    }
}


function validar2 (e) {
    if ( validarEmailLogin() && validarPasswordLogin()  ) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
}

//////////////////////////////////////////////
///////////////////////////////////////////////
//Registrar-se
function validarEmail(){
    var elemento = document.getElementById("emailRegistre");
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(elemento.value === ""){
        error2(elemento);
        return false;
    }else if(!regex.test(elemento.value)){
        error(elemento);
        return false;
    }else {
        return true;
    }
    
}

function error (elemento) {
    document.getElementById("mensajeErrorEmail").innerHTML= "Email incorrecte, torna";
    elemento.className="error";
    elemento.focus();
}

function error2(elemento) {
    document.getElementById("mensajeErrorEmail").innerHTML = "Omple el camp email";
    elemento.className="error";
    elemento.focus();
}

function validarPassword () {
    var motdepas = document.getElementById("password");
    var repeatpassword = document.getElementById("password2");

    if(motdepas.value == "" || motdepas.value.length < 6){
        document.getElementById("mensajeErrorPassword1").innerHTML= "Omple el camp amb un password de més de 6 caracters.";
        document.getElementById("password").className="error";
        document.getElementById("password").focus();
        return false;

    }else if (motdepas.value !== repeatpassword.value ){
        document.getElementById("mensajeErrorPassword2").innerHTML= "Els passwords no coincideixen.";
        document.getElementById("password2").className="error";
        document.getElementById("password").focus();
        return false;

    }else {
        return true;
    }
}

function validarCondicions(){
    var isChecked = document.getElementById('accept-terms').checked;
    if(! isChecked){
        alert("Cal acceptar les condicions");
        return false;
    }else {
        return true;
    }
}



function validar3 (e) {
    if ( validarEmail() && validarPassword() && validarCondicions()  ) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
}






