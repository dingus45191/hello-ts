let x = "hello world";

x = "hello mars";

x = 42; //error

const y = "hello world";
y = "hello";

const yObj = {
  foo: "hello",
};
yObj.foo = "hi";

let z;
z = 41;
z = "hello";

let zz: number;

zz = 55;
zz = "mars";

let aa: number[] = [];
aa.push(1);
aa.push("abc");

let ab = [];
ab.push(1);
ab.push("abc");

let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "Nowhere , USA",
  10110,
];

bb = [1, 2, 3];
bb.push(1, 4, 5, 4, 4, 4, 4);

let cc: { houseNumber: number; streetName: string };
cc = {
  streetName: "Fake Street",
  houseNumber: 123,
};

cc = {
  streetName: "Fake Street",
};

let dd: { houseNumber: number; streetName?: string };
dd = {
  streetName: "Fake Street",
  houseNumber: 123,
  c: 4,
};

interface Address {
  houseNumber: number;
  streetName: string;
}

export default Address;

//In case you see any error popping up, don't mind
