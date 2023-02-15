var time = 30;
var current_pic = 0;
var timerId = null;

function start_timer() {
        var sec = 0;
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + time);
        function countdownTimer() {
          const diff = deadline - new Date();
          if (diff <= 0) {
            clearInterval(timerId);
            answer(false);
            startvictorine();
            alert("Вы не ответили")
          }
          sec = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
          sec = sec < 10 ? '0' + sec : sec;
          document.getElementById("seconds").innerHTML = String(sec);
        }
        countdownTimer();
        timerId = setInterval(countdownTimer, 1000);
};

function getRndInteger() {
    return Math.floor(Math.random() * (12) ) + 1;
}
    
function startvictorine(){
    document.getElementById("additional_pictures").style.display = "none";
    document.getElementById("traning_rules").style.display = "none";
    document.getElementById("traning_start_button").style.display = "none";
    document.getElementById("all_question_content").style.display = "flex";
    current_pic = getRndInteger();
    document.getElementById("question_pic").src = "/pictures/quiz/picture" + current_pic + ".png";
    set_score();
    start_timer();
}

function stopvictorine(){
    clearInterval(timerId);
    document.getElementById("additional_pictures").style.display = "inline";
    document.getElementById("traning_rules").style.display = "flex";
    document.getElementById("traning_start_button").style.display = "flex";
    document.getElementById("all_question_content").style.display = "none";
}

function answer(check){
    document.getElementById("buttons").style.display = "none";
    us_name = localStorage.getItem("");
    let user = JSON.parse(localStorage.getItem(us_name));
    if (check){
        user.score = user.score + 100;
        time = time > 5 ? time - 3 : 5;
        element = document.getElementById("correct_answer");
        element.style.display = "inline";

    }
    else{
        element = document.getElementById("incorrect_answer");
        element.style.display = "inline";
        user.score = user.score - 50;
        time = time < 45 ? time + 3 : 45;
    }
    let json = JSON.stringify(user);
    localStorage.setItem(us_name, json);
    set_score();
    setTimeout(
        () => {
            element.style.display = "none";
            clearInterval(timerId);
            document.getElementById("buttons").style.display = "flex";
            startvictorine();
        },
        2 * 1000
      );
}

function selected_first(){
    if (current_pic >= 1 && current_pic <= 3){
        answer(true);
        return;
    }
    else{
        answer(false);
        return;
    }
}

function selected_second(){
    if (current_pic >= 7 && current_pic <= 9){
        answer(true);
        return;
    }
    else{
        answer(false);
        return;
    }
}

function selected_third(){
    if (current_pic >= 4 && current_pic <= 6){
        answer(true);
        return;
    }
    else{
        answer(false);
        return;
    }
}

function selected_fourth(){
    if (current_pic >= 10 && current_pic <= 12){
        answer(true);
        return;
    }
    else{
        answer(false);
        return;
    }
}