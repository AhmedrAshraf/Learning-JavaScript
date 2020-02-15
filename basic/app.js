// alert('this is alert')

// var frientAge = 25;
// var myAge = 15;
// var weight = frientAge + myAge;

// alert(weight)

// alert(2 + 2);

// var number = prompt("Check Number");
// var checkIsNumDivisible = number % 2;
// if (checkIsNumDivisible === 0) {
//   alert("this number is divisible");
// } else {
//   alert("this number is not divisible");
// }

// var totalCost = 1 + 3 * 4;
// console.log("TCL: totalCost", totalCost)

// var userAge = prompt("Your Age?");
// var DOB = 2020 - userAge;
// // var friendAge = prompt("Your Friend Age?");
// alert('Your Age is ' + userAge + ' Your Date of birth is ' + DOB )

// if (c === d) {
//   if (x === y) {
//     g = h;
//   } else if (a === b) {
//     g = h;
//   } else {
//     e = f;
//   }
// }
// else {
//   e = f;
// }

// var cities = ["karachi", "lahore", "islamabad", "KPK"];

// for (var i = 0; i < cities.length; i++) {
//   console.log("TCL: i", cities[i]);
// }

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// var cityToCheck = prompt('Check City');
// var matchFound = "no";
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = "yes";
//     alert("It's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === "no") {
//   alert("It's not on the list");
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }

// console.log(fullNames)

// var tableVAl = prompt('which table you want to display', '2');
// for(var i = 0; i < 11; i++){
//     console.log( tableVAl + ' x '+  i + ' = ' + tableVAl * i)
// }

// var cityToCheck = prompt('Type Your Name', 'user')

// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;

// alert(cappedCity)

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// var monthAbbrev;
// if (charsInMonth > 3) {
// monthAbbrev = month.slice(0, 3);
// }
// alert(monthAbbrev)

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 2) === " ") {
// alert("No double spaces!");
// break
// }
// }

// var text = 'The New World War II Yorker magazine doesnt allow the phrase World War II. World War II They say it World War II'
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(15 + 12);
//     }
// }
// console.log(text)

// var text =
//   "The New World War II Yorker magazine doesnt allow the phrase World War II. World War II They say it World War II";
// var firstChar = text.indexOf("World War II");
// console.log(firstChar);

// var text = 'The New World War II Yorker magazine doesnt allow the phrase They say it World War II';
// var firstChar = text.lastIndexOf("World War II");
// if (firstChar !== -1) {
// text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }
// console.log(text);

// var firstName = prompt('Enter Your Name')
// var firstChar = firstName.charAt(0)
// console.log(firstChar)

// var name = prompt('Enter Your Name')
// var lastChar = name.charAt(3);
// console.log(lastChar)

// var text = prompt('Enter Your Name')
// for (var i = 0; i < text.length; i++) {
//   if (text.charAt(i) === "!") {
//     alert("Exclamation point found!");
//     break;
//   }
// }

// var text = 'The New World War II Yorker magazine doesnt allow the phrase World War II. World War II They say it World War II'
// var newText = text.replace(World War II, "the Second World War");
// console.log(newText)

// var text = 'The New World War II Yorker magazine doesnt allow the phrase World War II. World War II They say it World War II'
// var newText = text.replace(/World War II/g, "the Second World War");
// console.log(newText)

// var scoreAvg = prompt('Enter Your Age')
// var numberOfStars = Math.round(scoreAvg);
// console.log(numberOfStars);

// Math.ceil
// Math.floor
// Math.round

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum)
// console.log(numberOfStars)

// var bigDecimal = Math.ceil(Math.random()*50);
// console.log(bigDecimal)

// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;

// var profit = Number('200') + Number('150');
// console.log(profit);

// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();
// console.log(numberAsNumber)
// console.log(numberAsString)

// var bigDecimal = Math.random();
// console.log( '$' + bigDecimal.toFixed(4))

// var num = 45
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
// str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);
// console.log(prettyNum)

// var rightNow = new Date();
// console.log(rightNow);

// var rightNow = new Date();
// var theDay = rightNow.getDay();
// var daysCollection = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat']
// console.log(daysCollection[theDay]);

// var d = new Date();
// var currentMonth = d.getMilliseconds();

// alert(currentMonth)

// var doomsday = new Date("June 30, 2035");
// console.log(doomsday);

// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);

// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// var d = new Date("July 21, 1983 13:25:00");

// console.log( msDiff)

// console.log(dDiff)

// var today = new Date();
// console.log("TCL: today", today)
// var setYear = today.setFullYear(2006)
// console.log("TCL: setYear", setYear)

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// tellTime()

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("Current time: " + theHr + ":" + theMin);
// }

// function greetUser() {
//   alert("Hello, there.");
// }
// greetUser()

// function PassingDataHere(name){
//     alert(name)
// }

// PassingDataHere('hello world')
// PassingDataHere('Ahmed Raza')
// PassingDataHere('hello')
// PassingDataHere('world')
// PassingDataHere('ghabrana nhi hay')

// function PassingDataHere(one, two) {
//   alert(one - two);
// }
// PassingDataHere(50, 10);

// function calcTot(merchTot) {
//   var orderTot;
//   if (merchTot >= 100) {
//     orderTot = merchTot;
//   } else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//   } else {
//     orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
//   }
//   return orderTot;
// }

// console.log(calcTot(79.99))

// var theSum;
// addNumbers();

// function addNumbers() {
//     theSum = 2 + 2;
// }

// alert(theSum)

// var theSum = addNumbers();

// function addNumbers() {
//   var theSum = 2 + 2;
//   return theSum;
// }
// console.log("TCL: theSum", theSum)

//            || or
//            && and

// var dayOfWk = prompt('Enter Any Day');

// if (dayOfWk === "Sat" && dayOfWk === "Sun") {
//   alert("Whoopee!");
// } else if (dayOfWk === "Fri" ) {
//   alert("TGIF!");
// } else {
//   alert("Shoot me now!");
// }

// var dayOfWk = prompt('Enter Any Day'); // Sat

// switch (dayOfWk) {
//   case "Sat":
//     alert("Whoopee");
//     break;
//   case "Sun":
//     alert("Whoopee");
//     break;
//   case "Fri":
//     alert("TGIF!");
//     break;
//   default:
//     alert("Shoot me now!");
// }

// function popup(message) {
//   alert(message + ' from inside html file');
// }

// function learnThis(element) {
//   element.style.color = "green";
// }

// function changeImg(tag, source) {
//   tag.src = source;
// }

// function showPreviousImg(id) {
//   var imageTag = document.getElementById(id);
//     imageTag.src = "loader5.gif";
// }

// function showNextImg(id) {
//   var imageTag = document.getElementById(id);
//   imageTag.src = "loader2.gif";
// }
arr = []


function renderThisOnPara(element) {
  arr.push(document.getElementById('psw').value)
  
}

