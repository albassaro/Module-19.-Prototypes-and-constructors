// Создание объекта
const machine = {
    type: "vehicle",
    model: "BMW M5",
    enginePower:"635",
    transmission: "automatic transmission",
}

// Функция поиска свойства в объекте
function getAllProperties(str,obj){
        console.log(str in obj);
}

// Вызов функции
console.log(machine);
console.log('');
getAllProperties('enginePower', machine);