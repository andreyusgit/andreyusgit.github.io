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
        // create cartesian chart
        var chart = anychart.cartesian();
  
        // create data set on our data
  
        // map data for the first series,take value from first column of data set
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
        // map data for the second series,take value from second column of data set
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
  
        // create column series with mapping data
        var column = chart.column(firstSeriesData);
        column.labels().enabled(true).format('{%Value} гр');
  
        // create jumpLine series with mapping data
        chart.jumpLine(secondSeriesData).stroke('2 #60727B');
  
        // turn on chart animation
        chart.animation(true);
        // set chart title text settings
        chart.title('Содержание полезных веществ в таком блюде\nв сравнении с дневной нормой');
        // set scale minimum
        chart.yScale().minimum(0);
        // set union tooltip
        chart
          .tooltip()
          .displayMode('union')
          // tooltips position and interactivity settings
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
        // set yAxis labels formatter
        chart.yAxis().labels().format('{%Value} гр');
        // axes titles
        chart.xAxis(true);
        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();
      };