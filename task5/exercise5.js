// Родительская функция-коструктор
class Electricalappliances {
    constructor() {
        this.connectionStatus = 'выключено';
    }

        // Собственные методы Electricalappliances 
    // Вкл приборы в розетку 
    enableDevice() {
        this.connectionStatus = 'включено';
        console.log('Устройство включено в розетку');
    }

    // Откл приборы из розетки
    disableDevice() {
        this.connectionStatus = 'выключено';
        console.log('Устройство выключено из розетки');
    }

    // Подсчет потребляемой мощности
    calculatePower(amperage, voltage) {
        console.log(`Устройство: ${this.name},  бренд: ${this.brand},  модельный номер: ${this.model},  потребляемая мощность: ${amperage*voltage} Ватт`);
        this.powerConsumption = amperage * voltage;
    }
}

// Наследование Tv от Electricalappliances
class Tv extends Electricalappliances {
    constructor(brand, model,connectionStatus) {
        super(connectionStatus);
        this.name = 'Телевизор';
        this.brand = brand;
        this.model = model;
        this.powerConsumption = 0;
        this.guarantee = '2 года';
        this.matrixType = 'ЖК';
        this.currentChannel = '';
    }

        // Собственные методы Tv
    // Переключение канала тв
    changeChannel() {
        if (this.connectionStatus === 'включено') {
            console.log(`Канал переключен. Текущий канал: ${this.currentChannel = Math.floor(Math.random() * 100) + 1}`);
        } else {
            this.currentChannel = '';
            console.log('Неудачная смена канала. Включите телевизор и затем смените канал');
        }
    }
}

// Первый экземпляр Tv
const tvOne = new Tv('samsung', 'gfqeg-184');

// Вызов функций первого экземпляра
tvOne.calculatePower(15, 22);
tvOne.enableDevice();
tvOne.changeChannel();
console.log(tvOne);
console.log('');
console.log('');

// Второй экземпляр Tv
const tvTwo = new Tv('xiaomi', 'svr-7');

// Вызов функций второго экземпляра
tvTwo.calculatePower(23, 14);
tvTwo.disableDevice();
tvTwo.changeChannel();
console.log(tvTwo);
console.log('');
console.log('');

// Наследование CoffeeMachine от Electricalappliances
class CoffeeMachine extends Electricalappliances {
    constructor(brand, model, connectionStatus) {
        super(connectionStatus);
        this.name = 'Кофемашина';
        this.brand = brand;
        this.model = model;
        this.powerConsumption = 0;
        this.typeCoffee = 'Grain'
        this.millstoneMaterial = 'metall';
        this.degreeGrinding = 3;
        this.waterAmount = 0;
    }

        // Собственные методы CoffeeMachine
    // Налить воды в кофеварку
    setWaterAmount(amount) {
        this.waterAmount = amount;
        console.log(`в кофеварку налито ${this.waterAmount}мл воды`);
    }

    // Сварить кофе
    brewCoffee() {
        if (this.waterAmount <= 0) {
            console.log(`Отсутствует вода для варки. Налейте воду в кофеварку`);
        } else if (this.connectionStatus === 'выключено') {
            console.log(`Кофеварка отключена от сети. Включите в сеть и повторите процедуру`);
        } else {
            console.log(`Кофе сварен`);
        }
    }
}

// Первый экземпляр CoffeeMachine
const turboCoffee = new CoffeeMachine('inhouse', 'Multicoffee-2');

// Вызов функций первого экземпляра
turboCoffee.calculatePower(4, 22);
turboCoffee.enableDevice();
turboCoffee.setWaterAmount(15);
turboCoffee.brewCoffee();
console.log(turboCoffee);
console.log('');
console.log('');

// Второй экземпляр CoffeeMachine
const krupsCoff = new CoffeeMachine('Quattroffee', 'EA817010');

// Вызов функций второго экземпляра
krupsCoff.calculatePower(9, 18);
krupsCoff.disableDevice();
krupsCoff.setWaterAmount(75);
krupsCoff.brewCoffee();
console.log(krupsCoff);
console.log('');
console.log('');