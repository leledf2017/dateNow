const fullTime = () => {
    const dt = new Date();

    let day = dt.getDay();
    let data = dt.getDate();
    let month = dt.getMonth();
    let year = dt.getFullYear();

    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }else{
        hours = hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }else{
        minutes = minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }else{
        seconds = seconds;
    }

    const weekList = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sabádo'
    ]

    const monthList = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    const fullDate = weekList[day] + ', ' + data + ' de ' + monthList[month] + ' de ' + year;
    const fullHours = hours + ':' + minutes + ':'+ seconds;

    const showDate = document.getElementById('date').innerHTML = fullDate;
    const showHours = document.getElementById('hours').innerHTML = fullHours;
}

const timeNow = setInterval(fullTime,1000);

