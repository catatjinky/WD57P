console.log ("connected");

// This is a single line comment.






// Naming Variables
 const pi = 2.0000; //constant variables cannot be re-assigned
console.log (pi);

let name1 = "Boriz"; //let can be re-assigned
name1 = "Richard"
console.log (name1);

//Let name1 = "David"; //Let name cannot be declared
//console.log (name1);

//var food = "pizza"; //ES6 slowly unused var as declaring variable
//console.log (food);

//Primitive Data Types

let name = "Joel"; //String data type
name = 'Tonet';
name = 'Kokou';
console.log (name);

let age = 15; //Number or integer
console.log(age); //it displays the data type that was addigned in the variable

let grade = 90.5
console.log (grade);

let myCopy; //this is an example of declaring a variable in a camel case notation.
console.log(myCopy); //it will be declared as undefined because nothing is declared in the variable.

let option1 =null;
console.log(option1);

//let 1fruit = "apple"; we do not apply a number before the word int the variable
//console.log(1fruit);

let $year = 2023;
console.log($year);

let $_year = 2023;
console.log($_year);

let __year = 2023;
console.log(__year);

//let !yesr = 2023; 
//console.log(!yes);

//Note: Certain special character are accepted when naming a variable
//Note: When combining special characters, it is still depends when naming a variable.

//Objects
//they have properties or key value pairs

let person = {
    //property:value

    name: "Jose Rizal", //string
    age:30, //number
    address: "Calamba, Laguna", //string
    isDoctor:true, //boolean
    spouse: null, //null
    siblings : [ //arrays
        "Paciano",
        "Maria",
        "Saturnina",
        "Conception",
        "Olympia",
        "Josefa",
        "Narcisa",
        "Lucia",
        "Soledad",
        "Trinidad"

    ]

}

console.log(person);
console.log(person.name);


