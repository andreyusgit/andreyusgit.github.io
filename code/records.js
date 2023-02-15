function set_records(){
    document.getElementById('records_info').style.display = 'none';
    document.getElementById('record_table_view').style.display = 'none';
    document.getElementById('cup').style.display = 'inline';
    document.getElementById('records_container').style.display = 'flex';
    var mass_elemets = [];
    for (var i = 0; i<localStorage.length; i++){
        key = localStorage.key(i);     
        if (key != ''){
            let user = JSON.parse(localStorage.getItem(key));
            mass_elemets.push(user);
        }
    }
    mass_elemets.sort((a, b) => a.score > b.score ? 1 : -1);
    mass_elemets.reverse();
    console.info(mass_elemets)
    for (i = 0; i < localStorage.length - 1; i++){
        if (i >= 5) return;
        us = mass_elemets[i];
        document.getElementById('scoreBoard' + (i + 1)).innerHTML = (i + 1) + " место: " + us.user_name + " имеет " + us.score + " очков";
    }
}