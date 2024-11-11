/* Задача: 
Реализуйте функцию для вывода всех ключей объекта, включая ключи его прототипа 
*/

const getAllKey = (obj) => {
  for (let key in obj) {
    console.log(`Ключ объекта: ${key}`);
  }
};

const obj = {
  name: "Ольга",
  age: 25,
};

const obj2 = {
  city: "Спб",
  __proto__: obj,
};

getAllKey(obj2);
