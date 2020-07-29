let obj1 = {
  x: 10,
  y: 20,
  age: 20,
};

console.log(obj1);

let obj2 = {
  x: 20,
  y: 20,
  z: 35,
  age: 30,
};

console.log(obj2);

function assignObjects(src) {
  let assignedObject = {};

  for (let i = 0; i < arguments.length; i++) {
    let prop = arguments[i];
    for (let key in prop) {
      assignedObject[key] = prop[key];
      }
    }   return assignedObject;
  }

console.log(assignObjects(obj1, obj2));









// V_2_The simple way)))

// let obj1 = {
//   x: 10,
//   y: 20,
//   z: 30,
//   age: 20,
// };

// console.log(obj1);

// let obj2 = {
//   x: 20,
//   y: 20,
//   z: 35,
//   age: 30,
// };

// console.log(obj2);

// function assignObjects(obj1, obj2) {
//   return Object.assign({}, obj1, obj2);
// }
  
// let assignedObjects = assignObjects(obj1, obj2);
// console.log(assignObjects(obj1, obj2));
