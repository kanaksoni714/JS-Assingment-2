//var person={name:"Amitabh",surname:"Bacchan"};
//console.log(person);
//console.log(person.name.writable);//

//var person={name:"Amitabh"}
//console.log(person);
//Object.defineProperties(person, "name",{ value:"Amit", configurable:true, writable:false, enumerable:false});

//*/console.log(person);
//Object.defineProperty(person, "name",{ value:"Amy", configurable:false, writable:true, enumerable:false});
//console.log(person);
//Object.defineProperty(person, "name",{ value:"Am", configurable:false, writable:true, enumerable:false});
//console.log(person);
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var energy = fruits.join(" and ");
//console.log(energy);
//Object.defineProperty(fruits, "Banana",{ value:"Kiwi", configurable:true, writable:false, enumerable:true});
//energy("kiwi");

var person={name:"Amitabh"}
Object.defineProperties(person, {name: { value:"Amit", configurable:true, writable:false, enumerable:true},

surname: { value:"Bacchan", configurable:true, writable:false, enumerable:true},
address: { value:"Juhu,Mumbai", configurable:true, writable:false, enumerable:true},
granddaughter:{ value:"Aradhya", configurable:true, writable:false, enumerable:true},
son: { value:"Abhi", configurable:true, writable:false, enumerable:true}});
console.log(person);
