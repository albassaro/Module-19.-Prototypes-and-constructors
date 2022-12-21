// Создаем объект
const car = {
    type: "vehicle",
    model: "volvo xc90",
}

// Создаем другой объект с прототипом
const machine = Object.create(car);

// Дополняем объект собственными свойствами
machine.enginePower="635";
machine.transmission= "automatic";

// Функция для вывода только собственных свойств объекта
function getAllProperties(obj){
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key)){
            console.log(key);
            console.log(obj[key]);
        }
    }
}

// Вызов функции
getAllProperties(machine);