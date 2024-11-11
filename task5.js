/* Задача: 
Реализовать цикл for of для объекта, который будет на каждой итерации получать ключ и значение

Речь идет про итераторы, а не for(const entry on Object.entries({})) */

const getObjValuesAndKeys = (obj) => {
  for (let i = 1; i <= Object.keys(obj).length; i++) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    if (typeof values[i - 1] === "object") {
      getObjValuesAndKeys(values[i - 1]);
      continue;
    }

    console.log(`Ключ ${keys[i - 1]} со значением ${values[i - 1]}`);
  }
};

getObjValuesAndKeys({
  a: "какой-то текст",
  b: 100,
  c: { d: "текст вложенного объекта" },
});
