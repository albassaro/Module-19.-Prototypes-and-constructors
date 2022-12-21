function createObject (){
    // Создаем пустой объект без прототипа
    const emptyObj = Object.create(null);

    // Добавление свойства для проверки
    emptyObj.type = "объект без прототипа"

    // Выводим в консоль и проверяем что объект создан и у него нет свойств прототипа
    console.log(emptyObj);
}

createObject();
