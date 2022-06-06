//empty object
// let obj={};
// console.log(obj);

// let Paras={

//     Name: "paras",
//     Age: 22,
//     phoneNo: 8218855565,
//     lastname: "koli",
// };
// console.log(Paras);

let capamerica={
    Name: "steve",
    age: 56,
    friends: ['paras','sonu','ruchi'],
    address: {
        city: "rudrapur",
        state: " uttarakhand",

    },
    isAvenger:false,
    sayhi:function(){
        console.log("cap America says Hiii");
    }
     

}
//whole object
console.log(capamerica);

//name of capamerica
console.log(capamerica.age);
console.log(capamerica.Name);
console.log(capamerica.address);
console.log(capamerica.friends);
console.log(capamerica.address.city);
console.log(capamerica.friends[0]);

//sayhi=> calling  a function
capamerica.sayhi();

//update object
console.log("object brfore update:",capamerica);
//addd a new key to object
capamerica.movies=['Avengers','civil war','endgame'];
console.log("object after update: ", capamerica);

//delete object
delete capamerica.movies;
console.log(capamerica);
capamerica.isAvenger=true;
console.log(capamerica);

capamerica.address.state="up";
console.log(capamerica);

//second method to access the key

console.log(capamerica.Name);
console.log(capamerica['Name']); // .name take by default string
console.log(capamerica['address']['city']);