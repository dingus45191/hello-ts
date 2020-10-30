// A helpful addition to the standard set of datatype from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values
enum Colors {
  Red,
  Green,
  Yellow,
  Blue,
}
let c: Colors = Colors.Green;

//unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a Boolean
notSure = false;

// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
function warnUser(): void {
  console.log("This is my warning message");
}

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
