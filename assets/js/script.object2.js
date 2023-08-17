// let personSimple = "John Doe";

// const personObject = new Object();
// personObject.firstName = "John";
// personObject.lastName = "Doe";
// personObject.age = 50;
// personObject.eyeColor = "blue";

// console.log(personSimple);
// console.log(personObject);



// let personSimple ="Aline Silva";

// const personObject = new Object();
// personObject.firstName = "Aline";
// personObject.lastName = "Silva";
// personObject.age = 17;
// personObject.eyeColor = "Brown";

// console.log(personSimple);
// console.log(personObject);


// let personSimple = "John Doe";

// const personObject = {
// firstName:"John",
// lastName:"Doe",
// age:50,
// eyeColor:"blue"
// }

// personObject.age = 17; //Mudando para 10, objeto são mutáveis

// console.log(personSimple);
// console.log(personObject);


//Classe
//sempre com a letra maiuscula


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         console.log (`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
//     }
// }

// const user1 = new User ('Aline', 17)
// user1.introduce();


// class Pizza {
//     constructor(base, sauce, toppings, cheese) {
//         this.base = base;
//         this.sauce = sauce;
//         this.toppings = toppings;
//         this.cheese = cheese;
//     }

//     getDescription() {
//         return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and lots os cheese.`;
//     }

//     getTimerBase() {
//         if (this.base == 'traditional') {
//             return 10;
//         } else if (this.base == 'integral') {
//             return 56
//         } else {
//             return 'This base does not exist!';
//         }
//     }

//     getTimerSauce() {
//         if (this.sauce == 'tomato') {
//             return 25;
//         } else if (this.sauce == 'pesto') {
//             return 30;
//         } else {
//             return 'This sauce does not exist!'
//         }
//     }

//     getTimerToppings() {
//         if (this.toppings == 'calabresa') {
//             return 20;
//         } else if (this.toppings == 'pepperoni') {
//             return 10;
//         } else {
//             return 'This toppings does not exist!'
//         }

//     }

//     getTimerCheese() {
//         if (this.cheese == 'mozzarella') {
//             return 8
//         } else if (this.cheese == 'cheddar') {
//             return 8;
//         } else {
//             return 'This cheese does not exist!'
//         }

//     }
// }

// const myPizza = new Pizza('traditional', 'tomato', 'pepperoni', 'mozzarella');

// let TimerTotal = myPizza.getTimerBase() + myPizza.getTimerCheese() + myPizza.getTimerSauce() + myPizza.getTimerToppings();

// console.log(myPizza.getDescription());
// console.log('Aqui está o resultado ' + TimerTotal);

// class Calculator{
//     add(a, b){
//         return a + b;
//     }
//     multiply(a, b){
//         return a * b;
//     }
//     subtract(a, b){
//         return a - b;
//     }

// }

// const calculator = new Calculator();

// const sumResult = calculator.add (5,3);
// console.log("Sum:", sumResult);

// const multiplicationResult = calculator.multiply(4,2);
// console.log("Multiplication:", multiplicationResult);

// const subtractionResult = calculator.subtract(10,4);
// console.log("Subtraction:", subtractionResult);



//HERANÇA
// class Witch {
//     constructor(name, patron, house, colorEyes) {
//         this.name = name;
//         this.patron = patron;
//         this.house = house;
//         this.colorEyes = colorEyes;
//     }

//     getName() {
//         return `O nome do bruxo(a) é: ${this.name}`;
//     }
//     getHouse() {
//         return `Ele(a) está na casa: ${this.house}`;
//     }
//     getPatron() {
//         return `Seu patrono é: ${this.patron}`;
//     }

// }

// const with1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'Green');

// console.log(with1.getName());

// class TypeWitch extends Witch {
//     constructor(name, patron, house, colorEyes, typeWitch) {
//         super(name, patron, house, colorEyes);
//         this.typeWitch = typeWitch;
//     }

//     getTypeWitch() {
//         if (this.house == 'P') {
//             return "Esse bruxo é sangue puro";
//         } else if (this.typeWitch = 'M') {
//             return "Este bruxo é Mestiço";
//         } else {
//             return "Este é trouxa"
//         }
//     }
// }

// const harry = new TypeWitch('Harry Potter', 'Cervo', 'Grynffindor', 'Verde/Azul', 'M');
// console.log(harry.getTypeWitch());


//Encapsulamento
//aron function, é uma função sem precisar ser chamada (=>)

class CamaraSecreta {
    constructor(name, password) {
        this.name = name;
        let _password = password; //atributo privado

        //Método privado, mas não no JS
        this.verifyPassword = (passwordInput) => {
            return passwordInput == _password; //retorna true ou false
        }
        //Método privado, mas não no JS
        this.acessChamber = () => {
            let passwordInput = prompt("Digite sua senha:");
            if (this.verifyPassword(passwordInput)) {
                console.log(`Seja Bem-Vindo`);
            } else {
                console.log(`Acesso negado, tente novamente`);
            }
        }
    };

//método público
showName() {
    console.log(`Nome do bruxo: ${this.name}`);
}
}

const myAccess = new CamaraSecreta ('Harry Potter', 'senha: 1,2,3')
myAccess.showName();

myAccess.name = 'HP'; //Funciona, pois o atributo é público
myAccess.password= '123'; //Não funciona, pois o atributo é privado


myAccess.acessChamber(); //Na teoria não deveria funcionar mas no JS funciona.