//**************************** Homework 1 *********************************/

let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };


//in toàn bộ 

 console.log(person);


//in từng phần

console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);

console.log(person["occupation"]);
console.log(person["name"]);
console.log(person["hobbies"]);

// in keys

console.log(Object.keys(person));

// in values

console.log(Object.values(person));





//**************************** Homework 2 *********************************/

let obj2 = {
    b: 2,
    a: 1,
    c: 3,
  };

  // Viết Hoa all keys
  let keys = Object.keys(obj2);
  let toUpper = function(x){ 
                     return x.toUpperCase();
                  };
  keys = keys.map(toUpper);
  console.log(keys)
  
  
  



//**************************** Homework 3 *********************************/

let Family = {}
   
   //add vào obj rỗng
Family.myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
  };

  console.log(Family.myFamily);



//???????????????????  1

let myFamily1 = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
  };

let Family1 = {
    myFamily: myFamily1,
}
console.log(Family1)


//???????????????????  2

function Family2(_quantity, _member, _location) {
     this.quantity = _quantity;
     this.member = _member;
     this.location = _location;
}
Family2.prototype.address = "To Ngoc Van";

let myFamily2 = new Family2(4, ["Dad", "Mom", "Me", "Daughter"], "Vietnam")

console.log(myFamily2)

for (let full in myFamily2) {
    console.log(full)
}

console.log(myFamily2.__proto__);





//**************************** Homework 4 *********************************/


// Cách 1 : Đổi 6 thành 606 bằng cách truy cập trực tiếp đến phần tử

let obj4 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

console.log(obj4);
console.log(obj4.bar[3]);

obj4.bar[3].xyz = 606;
console.log(obj4.bar[3]);



// Cách 2 : Đổi 6 thành 606 bằng cách sử dụng Object.assign
let obj5 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

console.log(obj5);
console.log(obj5.bar[3]);

let src = {xyz: 606};

const after = Object.assign(obj5.bar[3], src);

console.log(after);