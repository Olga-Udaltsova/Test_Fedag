/* Задача:
Вывести true, если объект или массив пусты, false - в противном случае
*/

const isEmpty = (obj) => {
  if (Array.isArray(obj)) {
    if (obj.length !== 0) {
      console.log(false);
      return;
    }
  }
  for (let key in obj) {
    console.log(false);
    return false;
  }
  console.log(true);
  return;
};

isEmpty({});
isEmpty([]);
isEmpty({ a: 1 });
isEmpty([1, 2, 3]);
