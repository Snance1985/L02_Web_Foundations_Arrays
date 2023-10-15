// let menu = [
//     "Hamburger",
//     "Fries",
//     "Milkshake",
//     "Garden Salad",
//     "Pizza Slice"
// ];
// //console.log(menu[1]);

// menu[5] = "Steak";
// console.log(menu);

// push()
// var pets = ["goldfish", "dog", "cat", "parrot"];
// pets.push("gerbil");
// console.log(pets);

// var pushLength = pets.push("lizard");
// console.log("New Length: " + pushLength);

// pop
// var bugs = ["grasshopper", "ant", "ladybug", "beetle"];
// console.log(bugs);
// bugs.pop();
// console.log(bugs);

// console.log(bugs.pop());

// forEach()
// find the sum of all numbers in the array
// var sum = 0;
// var numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
//   console.log(sum);
// }

// reverse
// var fruits = ["Apple", "Banana", "Coconut", "Grape"];
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// join
// var wildAnimals = ["lions", "tigers", "bears"];
// console.log(wildAnimals);
// console.log(wildAnimals.join());

// find
// let veggies = ["peas", "lettuce", "carrots", "brocolli"];
// let result = veggies.find((veg) => {
//     return veg.startsWith("c");   // condition
//   });

// length
// var numArray =[2, 4, 6, 8, 10, 12, 14];
// console.log(numArray.length);

// var lunch = ["PB&J", "apple", "chips", "brownie", "milk" ];

// for (var i = 0; i < lunch.length; i++) {
//     console.log(lunch[i]);
// }

let mySeaThings = ['dragonfish','octopus','squid','shark','seahorse','starfish','whale','pufferfish','lobster'];

function myCustomFilter(things){
    // create an empty array
    let result = [];

    // forEach loop through the input array
    things.forEach(function(item) {
        // find elements that start with "s"
        if (item.startsWith("s")) {
            // push any matches to the result array
            result.push(item);
        }
    })

    // return the result array
    return result
}

// call the function within a console statement
console.log(myCustomFilter(mySeaThings));



  
  

