var actual_mass = {
    'dish1': 100,
    'dish2': 100,
    'dish3': 100, 
    'dish4': 100
}
    
function change_mass(dish, title){
    result = prompt("Сколько грамм продукта в блюде");
    if ((result != null) || (result != '')){
        actual_mass[dish] = result;
    }
    else{
        alert('Введите число')
        return;
    }
    document.getElementById(dish).innerHTML = title + ' - ' + result + ' гр.';
    document.getElementById('container').innerHTML = ''
    create_graf();
}

function calculate_proteins(){
    var val = (actual_mass['dish1'] * 0.216) + (actual_mass['dish2'] * 0.035) + (actual_mass['dish3'] * 0.263) + (actual_mass['dish4'] * 0.028);
    return val;
}

function calculate_fats(){
    var val = (actual_mass['dish1'] * 0.069) + (actual_mass['dish2'] * 0.004) + (actual_mass['dish3'] * 0.452) + (actual_mass['dish4'] * 0.004);
    return val;
}

function calculate_carbohydrates(){
    var val = (actual_mass['dish1'] * 0) + (actual_mass['dish2'] * 0.232) + (actual_mass['dish3'] * 0.099) + (actual_mass['dish4'] * 0.066);
    return val;
}

function calculate_cellulose(){
    var val = (actual_mass['dish1'] * 0) + (actual_mass['dish2'] * 0.018) + (actual_mass['dish3'] * 0.07) + (actual_mass['dish4'] * 0.026);
    return val;
}

function create_graf() {
        document.getElementById('directory_info').style.display = 'none';
        document.getElementById('directory_view').style.display = 'none';
        document.getElementById('all_schedule_content').style.display = 'flex';

        var dataSet = anychart.data.set([
            ['Белки', calculate_proteins(), 122,5],
            ['Жиры', calculate_fats(), 80.5],
            ['Углеводы', calculate_carbohydrates(), 140],
            ['Клечатка', calculate_cellulose(), 27.5]
        ]);

        var chart = anychart.cartesian();
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
  

        var column = chart.column(firstSeriesData);
        column.labels().enabled(true).format('{%Value} гр');
        column.stroke('2 #fff 1').fill('#399909');

        chart.jumpLine(secondSeriesData).stroke('2 #60727B');
  
        chart.animation(true);
        chart.title('Содержание полезных веществ в таком блюде\nв сравнении с дневной нормой');
        chart.yScale().minimum(0);
        chart
          .tooltip()
          .displayMode('union')
          .positionMode('point')
          .unionFormat(function () {
            return (
              'Нужно на день: ' +
              this.points[1].value +
              ' гр' +
              '\nВ таком приёме пищи: ' +
              this.points[0].value +
              ' гр'
            );
          });
        chart.interactivity().hoverMode('by-x');
        chart.yAxis().labels().format('{%Value} гр');
        chart.xAxis(true);
        chart.container('container');


        anychart.color.lighten("#FF0000", 0.2)
        chart.draw();
      };