//Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const  result= 5+5+"5";    //пише помилку синтакису
console.log(result);


//Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email = prompt("Введіть вашу електронну пошту: ");
console.log(`Ваша  пошта є ${email.includes("@")}\nДовжина вашої  пошти - ${email.length} символів`);


//Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const my = "my";
const name = "name";
const is = "is";
const yourName = prompt("введіть ваше ім'я");
const fullName = `${my} ${name} ${is} ${yourName}`;
console.log(fullName);



//Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = prompt("Введіть ваше ім'я");
const payment = prompt("Ваша сума до оплати");
console.log(alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`));