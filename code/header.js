var reloaded  = function(){
    set_score();
    auth_done();
    set_score2();
}

function set_score(){
    us_name = localStorage.getItem("");
    let user = JSON.parse(localStorage.getItem(us_name));
    document.getElementById("user_score").innerHTML = "Счёт: " + String(user.score);
}
window.onload = function() {
      var loaded = sessionStorage.getItem('loaded');
      check = localStorage.getItem("")
      if(loaded && check != null) {
        reloaded();
      } else {
        sessionStorage.setItem('loaded', true);
      }
    }
    
function openLoginForm() {
    document.getElementById('auth_form').style.display = 'flex';
}

function closeLoginForm() {
    document.getElementById('auth_form').style.display = 'none';
    document.getElementById("form_title").innerHTML = "Авторизация";
    document.getElementById("form_auth_submit").style.display = "flex";
    document.getElementById("form_change_to_registr").style.display = "flex";
    document.getElementById("form_registr").style.display = "none";
}

function change_to_registration(){
    document.getElementById("form_title").innerHTML = "Регистрация";
    document.getElementById("form_auth_submit").style.display = "none";
    document.getElementById("form_change_to_registr").style.display = "none";
    document.getElementById("form_registr").style.display = "flex";
}

function auth_done(){
    document.getElementById("login_id").style.display = "none";
    var logout = document.getElementById("logout_id");
    logout.style.display = "flex";
    logout.style.backgroundColor = "rgb(186, 64, 64";
    logout.style.border = "3px solid rgb(105, 0, 0)";
    document.getElementById("traning_page").style.display = "inline";
    document.getElementById("config_page").style.display = "inline";
    document.getElementById("directory_page").style.display = "inline";
    document.getElementById("record_page").style.display = "inline";
    document.getElementById("vegetables_picture").style.display = "none";
    document.getElementById("side_dish_1").style.display = "inline";
    document.getElementById("side_dish_2").style.display = "inline";
    document.getElementById("side_dish_3").style.display = "inline";
    document.getElementById("main_title").innerHTML = "Приветсвую, " + localStorage.getItem("") + " !";
    document.getElementById("main_subtitle").innerHTML = "<br>Теперь Вам доступна вся функциональность сайта !<br>Рекомендую начать знакомство с Тренажора, чтобы<br>проверить свои знания, но если же Вы<br>уверенны в своих знаниях, то можете переходить<br>сразу к конфигуратору и проверять себя";

}

function autorisation(){
    var name = document.getElementById('auth_email').value;
    var password = document.getElementById('auth_pass').value;
    if (name == "" || password == ""){
        alert("Необходимо заполнить оба поля!");
        document.getElementById('auth_email').value = null;
        document.getElementById('auth_pass').value = null;
        return;
    }
    var check = localStorage.getItem(name)
    if (check == null) {
        alert("Никнейм не найден, похоже, Вам нужно зарегестрироваться");
        change_to_registration();
        document.getElementById('auth_email').value = null;
        document.getElementById('auth_pass').value = null;
        return;
    }
    else{
       let user = JSON.parse(check)
       if (password != user.user_pass) {
        alert("Вы ввели неверный пароль!");
        document.getElementById('auth_email').value = null;
        document.getElementById('auth_pass').value = null;
        return;
       }
       else{
        localStorage.setItem("", name);
        closeLoginForm();
        auth_done();
       }
    }
}

function registration(){
    var name = document.getElementById('auth_email').value;
    var password = document.getElementById('auth_pass').value
    if (name == "" || password == ""){
        alert("Необходимо заполнить оба поля!");
        document.getElementById('auth_email').value = null;
        document.getElementById('auth_pass').value = null;
        return;
    }
    var check = localStorage.getItem(name)
    if (check != null) {
        alert("Этот никнейм уже занят");
        document.getElementById('auth_email').value = null;
        document.getElementById('auth_pass').value = null;
        return;
    }
    else{
        let user = {
            user_name: name,
            user_pass: password, 
            score: 0, 
            theme: []
        };
        let json = JSON.stringify(user);
        localStorage.setItem(name, json);
        localStorage.setItem("", name);
        closeLoginForm();
        auth_done();
    }

}

function logout_f(){
    localStorage.setItem("", "false")
    document.getElementById("logout_id").style.display = "none";
    document.getElementById("login_id").style.display = "flex";
    document.getElementById("vegetables_picture").style.display = "inline";
    localStorage.removeItem("");
    location.reload();
}
