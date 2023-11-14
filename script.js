// 1

let numbers = [11,12,13,345,6543,];
console.log(numbers[1]+ numbers[0] + numbers[2]+  numbers[3] + numbers[4]);

//2

let student = [
 {
    name: 'iako',
    age: 24,
    address: 'rustavi'
 },
 {
    name: 'giorgi',
    age: 25,
    address: 'tbilisi'
 },
 {
    name: 'sofo',
    age: 25,
    addres: 'kakheti'
 },
]
 //3
console.log(`My name is ${student[0].name}, my age is ${student[0].age}  my address is ${student[0].address}.`);   

//4
if (student[1].age < 19) {
    console.log('i am a teenager'); }
    else {
        console.log('i am an adult');
    }

//5 აქ ეს ოთხკუთხედები როგორ არ უნდა გამოჩნდეს? თუ ასე უნდა იყოს?

let numberss = [13,54,13,132,134,];
for (let i = 0; i < 1; i++) {
    console.log(numberss);
}

//6 ყველგან ვნახე კოდი მაგრამ ვერ მივხვდი ზუსტად მაინც 
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}
if (currentDay === 0) {
  console.log("Sunday");
}
