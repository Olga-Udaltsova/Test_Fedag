/* Задача:
Реализовать одну из функций массива на выбор (map, filter, reduce) и заменить ею уже существующую функцию в Array 
*/

Array.prototype.isFilter = function (callback) {
  const newArr = [];
  this.forEach(function (el, index, arr) {
    if (callback(el, index, arr)) {
      newArr.push(el);
    }
  });
  return newArr;
};

const arr = [1, 3, 4, 6, 8, 9, 10];

const example = arr.isFilter((item) => item > 5);

console.log(example);
