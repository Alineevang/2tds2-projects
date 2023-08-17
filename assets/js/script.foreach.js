// const companies = ["Apple", "Google", "Samsung"];

// companies.forEach(company => {
//     console.log(`Hey, ${company}!`);
// });

// const names = ["Foxy", "Bonnie", "Freddy", "Chica"];
// names.forEach((name) => {
//     console.log(`Hi, ${name}`);
// });

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers);

// numbers.forEach((number, index) => {
//     if (number%2 == 0) {
//     console.log(number + ` está na posição ${index} do array.`);
//     }
// });
//index = indice

// const cars = [
//     {
//         marca: "Ford",
//         modelo: "Fusion",
//     },
//     {
//         marca: "Chevrolet",
//         modelo: "Onix",
//     },
//     {
//         marca: "Ford",
//         modelo: "Focus",
//     },
//     {
//         marca: "Toyota",
//         modelo: "Corolla, Altis",
//     }
// ];

// cars.forEach((car) => {
//     console.log(`Marca: ${car.marca} - Modelo: ${car.marca}`);
// })
//forEach orientado a objeto

class Car {
    constructor(brand, model) {
        this.brand = brand; //marca
        this.model = model; //model
    }
}

class CarList {
    constructor() {
        this.cars = [];
    }

    addCar(param) {
        this.cars.push(param)
    }

}

const carList = new CarList();
function createCar() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;

    const car = new Car(brand, model);

    carList.addCar(car);

    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";

    carList.cars.forEach



    
}