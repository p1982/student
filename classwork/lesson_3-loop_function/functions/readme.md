### Конспект урока

#### Определение

Функция - это кусок кода, выполняющий один и тот же по смыслу набор действий (проверка на что-то, подсчет, изменение данных и т.д.) с теми данными, которые вы ей передаете. То есть, если вам нужно посчитать площадь круга, вы вызываете функцию и передаете ей радиус круга, и получаете в ответ нужное число.
Пример (файл "function-example.html"):
```
    // "Объявляем", то есть создаем функциюю
    function calcCircleArea(radius) {
        const circleArea = 3.1516926*radius**2;
        return circleArea;
    }

    const result = calcCircleArea(10); //  вызываем ее справа от знака '=', передавая ей значение. В результате в переменную 'result' будет сохранено посчитанное значение
    console.log(result); // выводим результат на экран
```

#### Когда и зачем нужны функции

Каждый раз, когда вы понимаете, что две и больше строк кода у вас повторяются (повторяются по смыслу, но с разными значениями), это значит, что этот код можно вынести в отдельную функцию. Пример: вам нужно спросить у пользователя его имя и фамилию, и переспросить их, если:
- пользователь ввел пустую строку "";
- пользователь ввел сколько угодно пробелов;
- пользователь ввел только цифры;
- пользователь ввел имя, начинающееся с цифр (в середине имени цифры допустимы).

<strong>Примечание:</strong> как работает функция `parseFloat()` вы можете посмотреть в [файле](examples/parseFloat-example.html)

Раньше бы вы написали так (Пример - в файле "example-2.html"):

```
    let userName = prompt("Введите имя");
    // parseFloat вернет нам только цифры, если они стояли в начале строки, и isNaN, получив их, вернет false
    while (!isNaN(userName) || !isNaN(parseFloat(userName))) {
        userName = prompt("Введите имя");
    }
    const userLastName = prompt("Введите фамилию");
    while (!isNaN(userLastName) || !isNaN(parseFloat(userLastName))) {
        userLastName = prompt("Введите имя");
    }
```

А теперь можно написать так:
```
    // Создаем функцию, которая получает строку, и возвращает false, если строка не проходит проверку, и true - если проходит
    function isName(str) {
        if(!isNaN(userName) || !isNaN(parseFloat(userName))){
            return false;
        }
        else {
            return true;
        }
    }

    let userName = prompt("Введите имя");
    // Вызываем внутри while функцию, и в зависимости от  ответа переспрашиваем имя или нет
    while (!isName(userName)) {
        userName = prompt("Введите имя");
    }
    const userLastName = prompt("Введите фамилию");
    while (!isName(userLastName)) {
        userLastName = prompt("Введите имя");
    }  

```
Как видите, функция обладает 2 преимуществами:
1. Сокращение объемов кода.
2. Удобство внесения изменений - если требования к имени поменяются (например, нужно будет проверять, что в имени минимум 2 символа) - вы внесете изменения в одном месте (в функции), а не в куче мест в коде.

Воспринимайте их как "черный ящик", которым можете пользоваться вы или ваши коллеги по принципу "Закинул что-то - получил ответ согласно описаной документации. Как оно там внутри работает и что делает - мне неважно". Прям как микроволновка:)


#### Синтаксис (как их писать)

1. Сначала функцию нужно определить (по факту - создать переменную, которая будет хранить в себе код):
```
    // ключевое слово function означает, что будет создана переменная, которая будет хранить в себе не значение, а набор действий
    function calcCircleArea(radius) {
        const circleArea = 3.1516926*radius**2;
        return circleArea;
    }
    
    console.log(calcCircleArea) // выведет в консоль код, храняющийся в переменной calcCircleArea
```

2. Потом в нужно месте вызвать (по факту - подставить вместо переменной код, который в нее записан):

```
console.log(calcCircleArea(5)) // а вот тут мы вызываем переменную, передавая ей в качестве аргумента число 5
```

#### Аргументы функции

Поскольку функция должна выполнять одни и те же действия с разными значениями, то эти значения должны в не е как-то попадать. И при этом она не должна задевать внешние переменные. Для этого и придуманы аргументы

##### Что происходит при вызове функции
```
        function calcCircleArea(radius) {
            const circleArea = 3.1516926 * radius ** 2;
            return circleArea;
        }

        const result = calcCircleArea(10);
        /* Когда вы "вызываете" функцию, происходит вот что:
        
        var radius; // создается внутренняя переменная функции, с именем radius
        radius = 10; // в нее записывается значение, переданное в функцию, и дальше функция работает уже со своей, личной переменной, а не с внешней
        const circleArea = 3.1516926 * radius ** 2; // высчитывается площадь
        result = circleArea; // В переменную result сохраняется то, что записано в описании функции как return
        delete radius; // внутрення переменная radius уничтожается, и поэтому она недоступна после окончания работы функции
        */
```

То есть вместо имени функции по сути каждый раз при ее вызове подставляется код, который она хранит внутри себя

#### Встроенные функции

Вы уже с ними встречались, примеры: `isNaN`, `Number` и т.д.

#### Best Ptactice в написании функций

1. начинается с глагола (is, calc, get).
2. Выполняет одно осмысленное действие.
3. работает только с внутренним переменными.
4. Желательно - что-то возвращает.
5. Определяются внизу программы.

#### Задачи
Все задачи находятся в этой папке, и начинаются со слов "exercice".