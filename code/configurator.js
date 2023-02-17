var segment = 0;
dragElement = null;
var selected_ids = new Object();
var selected_ids = {
    first:-1,
    second:-1,
    third:-1,
    fourth:-1
}

function startconfig(){
    us_name = localStorage.getItem("");
    let user = JSON.parse(localStorage.getItem(us_name));
    if(Number(user.score) < 400){
        alert("Недостаточно баллов, заработайте их в тренажоре");
        //return;
    }
    user.score = user.score - 400
    let json = JSON.stringify(user);
    localStorage.setItem(us_name, json);
    set_score();
    document.getElementById("config_rules").style.display = "none";
    document.getElementById("traning_start_button").style.display = "none";
    document.getElementById("conf_container").style.display = "flex";
    document.getElementById("conf_title").style.display = "inline";
}

function stopconfig(){
    document.getElementById("config_rules").style.display = "flex";
    document.getElementById("traning_start_button").style.display = "flex";
    document.getElementById("conf_container").style.display = "none";
    document.getElementById("conf_title").style.display = "none";
}


(function drag_and_drop(){
    const drop_zone = document.getElementById("dropzone");

    drop_zone.addEventListener('dragover', (e => {
        e.preventDefault();
    }));

    drop_zone.addEventListener('drop', (e => {
        add_back(dragElement.id);
    }));

})();

function add_back(id){
    element = document.getElementById(id);
    element.style.display = "none";
    pos = id.substr(8, 2);
    if (segment == 0){
        selected_ids.first = pos;
        document.getElementById("circle").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.first + ".jpg)";
        document.getElementById("back_button").style.display = "flex";
    }
    if (segment == 1){
        selected_ids.second = pos;
        document.getElementById("left-half").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.first + ".jpg)";
        document.getElementById("right-half").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.second + ".jpg)";
    }
    if (segment == 2){
        selected_ids.third = pos;
        document.getElementById("topleft").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.third + ".jpg)";
    }
    if (segment == 3){
        selected_ids.fourth = pos;
        document.getElementById("bottomright").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.first + ".jpg)";
        document.getElementById("bottomleft").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.second + ".jpg)";
        document.getElementById("bottomleft").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.third + ".jpg)";
        document.getElementById("topleft").style.backgroundImage = "url(/pictures/config/backgrounds/background" + selected_ids.fourth + ".jpg)";
        document.getElementById("check_button").style.display = "flex";
    }
    segment++;
}

function go_back(){
    segment--;
    if (segment == 0){
        id = selected_ids.first; 
        document.getElementById("circle").style.backgroundImage = "url()";
        document.getElementById("back_button").style.display = "none";
    }
    if (segment == 1){
        id = selected_ids.second; 
        document.getElementById("left-half").style.backgroundImage = "url()";
        document.getElementById("right-half").style.backgroundImage = "url()";
    }
    if (segment == 2){
        id = selected_ids.third; 
        document.getElementById("topleft").style.backgroundImage = "url()";
    }
    if (segment == 3){
        id = selected_ids.fourth; 
        document.getElementById("bottomright").style.backgroundImage = "url()";
        document.getElementById("bottomleft").style.backgroundImage = "url()";
        document.getElementById("bottomleft").style.backgroundImage = "url()";
        document.getElementById("topleft").style.backgroundImage = "url()";
        document.getElementById("check_button").style.display = "none";
    }
    element = document.getElementById("element_" + id);
    element.style.display = "flex";
}

function go_check(){
    if (segment == 4){
        document.getElementById("dropzone").style.display = "none";
        if (selected_ids.first == 1 || selected_ids.first == 3){
            if (selected_ids.second == 4 || selected_ids.second == 5){
                if (selected_ids.third == 7 || selected_ids.third == 8 || selected_ids.third == 9){
                    if (selected_ids.fourth == 10 || selected_ids.fourth == 11 || selected_ids.fourth == 12){
                        us_name = localStorage.getItem("");
                        let user = JSON.parse(localStorage.getItem(us_name));
                        user.score = user.score + 800
                        let json = JSON.stringify(user);
                        localStorage.setItem(us_name, json);
                        set_score();
                        element = document.getElementById("correct_answer");
                        element.style.display = "inline";
                        alert("Поздравляю, Вы прошли !")
                        setTimeout(
                        () => {
                            element.style.display = "none";
                            stopconfig();
                        },
                        4 * 1000
                        );
                        return;
                    }
                }
            }
        }
        element = document.getElementById("incorrect_answer");
        element.style.display = "inline";
        alert("К сожалению, составленное Вами блюдо не было сбалансированно")
        setTimeout(
            () => {
                element.style.display = "none";
                stopconfig();
            },
            4 * 1000
            );
    }
}

function mouseDown1(){
    dragElement = document.getElementById("element_1");
}
function mouseDown3(){
    dragElement = document.getElementById("element_3");
}
function mouseDown4(){
    dragElement = document.getElementById("element_4");
}
function mouseDown5(){
    dragElement = document.getElementById("element_5");
}
function mouseDown7(){
    dragElement = document.getElementById("element_7");
}
function mouseDown8(){
    dragElement = document.getElementById("element_8");
}
function mouseDown9(){
    dragElement = document.getElementById("element_9");
}
function mouseDown10(){
    dragElement = document.getElementById("element_10");
}
function mouseDown11(){
    dragElement = document.getElementById("element_11");
}
function mouseDown12(){
    dragElement = document.getElementById("element_12");
}