/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((obj) => {
    obj.profession === "developer" ? console.log(obj) : console.log();
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((obj) => {
    if (obj.profession === "developer") {
      console.log(obj);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr[arr.length - 1]);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((obj) => {
    obj.profession !== "admin" ? console.log(obj) : console.log();
  });
}

function concatenateArray() {
  //Write your code here, just console.log

  let arr1 = [
    { id: 5, name: "sai", age: "16", profession: "admin" },
    { id: 6, name: "akshay", age: "18", profession: "intern" },
    { id: 7, name: "ram", age: "20", profession: "full stack" },
  ];

  arr = arr.concat(arr1);

  arr.forEach((obj) => {
    console.log(obj);
  });
}
