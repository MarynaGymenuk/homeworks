// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

        let hamburgers = 4;
        let fries = 1;
        
        if(hamburgers >= 4 && fries >= 1){
            console.log('Ми поїли');
        } else {
            console.log('Ми йдемо в інше кафе');
        }

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

        let price = 2000;

        if(price >= 1000 && price <= 1900){
            console.log(`in 1000-1900: ${price}`);
        } else {
            console.log(`not in 1000-1900: ${price}`);
        }

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

        price = 3000;

        if(price <= 1000 || price >= 1900){
            console.log(`not in 1000-1900: ${price}`);
        } else {
            console.log(`in 1000-1900: ${price}`);
        }

        if(!(price >= 1000 && price <= 1900)){
            console.log(`not in 1000-1900: ${price}`);
        } else {
            console.log(`in 1000-1900: ${price}`);
        }

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

        let period = 3;

        if(period == 1){
            console.log('winter');
        } else if(period == 2){
            console.log('spring');
        } else if(period == 3){
            console.log('summer');
        } else if(period == 4){
            console.log('autumn');
        } else {
            console.log('unknown period');
        }

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

        let a = 100;
        let b = 50;
        let c = 200;

        if(a > b && a > c){
            if(b > c){
                console.log(b);
            } else{
                console.log(c);
            }
        } else if(b > a && b > c){
            if(a > c){
                console.log(a);
            } else{
                console.log(c);
            }
        } else{
            if(a > b){
                console.log(a);
            } else{
                console.log(b);
            }
        }

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

        let dayOfWeek = 4;

        switch(dayOfWeek){
            case 1:
                console.log('Monday');
                break;
            case 2:
                console.log('Tuesday');
                break;
            case 3:
                console.log('Wednesday');
                break;
            case 4:
                console.log('Thursday');
                break;
            case 5:
                console.log('Friday');
                break;
            case 6:
                console.log('Saturday');
                break;
            case 7:
                console.log('Sunday');
                break;
        }



// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

        let num1 = 10;
        let num2 = 5;
        let operation = '/';

        switch(operation){
            case '+':
                console.log(num1 + num2);
                break;
            case '-':
                console.log(num1 - num2);
                break;
            case '*':
                console.log(num1 * num2);
                break;
            case '/':
                if(num2 == 0){
                    console.log('You can\'t divide by zero')
                } else{
                    console.log(num1 / num2);
                }
                break;
        }

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

        let someWord = 'London';
        let regexp = /[eyuioa]/;
        someWord = someWord.split(regexp).join('');
        console.log(someWord);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
//     https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk

        let meters = 10000;
        let kilometers = meters / 1000;
        let wordMeters = 'метр';
        let wordKilometers = 'кілометр';

        let metersEnd = meters % 10;
        let metersEnd2 = meters % 100;

        let kilometersEnd = kilometers % 10;
        let kilometersEnd2 = kilometers % 100;

        if((metersEnd >= 5 && metersEnd <= 9) ||
            (metersEnd2 >= 11 && metersEnd2 <= 14) ||
            metersEnd === 0){
                wordMeters = 'метрів';
        } else if(metersEnd >= 2 && metersEnd <= 4){
            wordMeters = 'метри';
        } else if(meters > 0 && meters < 1){
            wordMeters = 'метра';
        }

        if((kilometersEnd >= 5 && kilometersEnd <= 9) ||
            (kilometersEnd2 >= 11 && kilometersEnd2 <= 14) ||
            kilometersEnd === 0){
                wordKilometers = 'кілометрів';
        } else if(kilometersEnd >= 2 && kilometersEnd <= 4){
            wordKilometers = 'кілометри';
        } else if(kilometers > 0 && kilometers < 1){
            wordKilometers = 'кілометра';
        }

        let sentence = `${meters} ${wordMeters} - це ${kilometers} ${wordKilometers}.`;

        console.log(sentence);
