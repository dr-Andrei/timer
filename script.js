//данные
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let button = document.querySelector('button');
let s, m;
let sbros = true;
let click = true;
sec.textContent = '00';
min.textContent = '00';

//Запуск по кнопке
button.onmousedown = () => {
    //получение времени от пользователя
    let time = document.querySelector('.input_value').value;
    time = time.split(':');
    m = +time[0];
    s = +time[1];
}

button.onmouseup = () => {
    if (m == '' && s == '') {
        alert("Установите время!");
    }
    else if (click && m != undefined && s != undefined) {

        //запрет на повторное нажатие кнопки старта таймера
        click = false;

        let timer = setInterval(() => {
            go(s, m);
            vivod(s, m);
            if (!sbros) clearInterval(timer);
        }, 1000);
    }
    else if (!click) {
        alert("Новое время установлено!");
    }
}

//Вывод
function vivod(s = 0, m = 0) {
    if (s <= 9 && s >= 0) {
        sec.textContent = '0' + s;
        min.textContent = m;
    }

    else {
        sec.textContent = s;
        min.textContent = m;
    }
}

///Главная функция расчёта времени
function go(x, y) {
    let s1 = x - 1;
    let m1;
    document.querySelector('.toggle').classList.toggle('red');
    if (x == 0 && y == 0) {
        alert('Таймер закончил работу');
        return [m = 0, s = 0, sbros = false];
    }
    else if (s1 == -1) {
        m1 = y - 1;
        s1 = 59;
        return [m = m1, s = s1];
    }
    else return s = s1;
}





