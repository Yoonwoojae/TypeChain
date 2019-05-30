export {};
const name = "woojae",
age = 22,
gender = "male"

const sayHi = (name: String, age: number, gender: String): void => {
    console.log(` Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age, gender);