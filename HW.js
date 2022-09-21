// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

        function mcDonalds(hamburgers, fries){
            if(hamburgers >= 4 && fries >= 1){
                return 'Ми поїли';
            } else {
                return 'Ми йдемо в інше кафе';
            }
        }

        console.log(mcDonalds(3, 1));

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

        const goodsPrice = function(price){
            if(price >= 1000 && price <= 1900){
                return `in 1000-1900: ${price}`;
            } else {
                return `not in 1000-1900: ${price}`;
            }
        }

        console.log(goodsPrice(2000));

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

        const goodsPrice2 = (price) => {
            if(price <= 1000 || price >= 1900){
                return `not in 1000-1900: ${price}`;
            } else {
                return `in 1000-1900: ${price}`;
            }
        }

        console.log(goodsPrice2(3000));


        const goodsPrice3 = (price) => {
            if(!(price >= 1000 && price <= 1900)){
                return `not in 1000-1900: ${price}`;
            } else {
                return `in 1000-1900: ${price}`;
            }
        }

        console.log(goodsPrice3(2000));

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

        const season = (period) => {
            if(period == 1){
                return 'winter';
            } else if(period == 2){
                return 'spring';
            } else if(period == 3){
                return 'summer';
            } else if(period == 4){
                return 'autumn';
            } else {
                return 'unknown period';
            }
        }

        console.log(season(3));

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

        const middleNumber = (a, b, c) => {
            if(a > b && a > c){
                if(b > c){
                    return b;
                } else{
                    return c;
                }
            } else if(b > a && b > c){
                if(a > c){
                    return a;
                } else{
                    return c;
                }
            } else{
                if(a > b){
                    return a;
                } else{
                    return b;
                }
            }
        }

        console.log(middleNumber(100, 50, 200));

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

        function dayOfWeek(day){
            switch(day){
                case 1:
                    return 'Monday';
                case 2:
                    return 'Tuesday';
                case 3:
                    return 'Wednesday';
                case 4:
                    return 'Thursday';
                case 5:
                    return 'Friday';
                case 6:
                    return 'Saturday';
                case 7:
                    return 'Sunday';
            }
        }

        console.log(dayOfWeek(4));

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

        const math = function(num1, num2, operation){
            switch(operation){
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    if(num2 == 0){
                        return('You can\'t divide by zero')
                    } else{
                        return num1 / num2;
                    }
            }
        }

        console.log(math(10, 5, '/'));

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

        const deleteVowels = (word) => {
            let regexp = /[eyuioa]/i;
            word = word.split(regexp).join('');
            return word;
        }

        console.log(deleteVowels('LondOneyuiIIIIIOOOOOOEEEEEaaaaAAAA'));

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
//     https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk

        const metersKilometers = (meters) => {
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

            return `${meters} ${wordMeters} - це ${kilometers} ${wordKilometers}.`;
        }

        console.log(metersKilometers(10000));
        