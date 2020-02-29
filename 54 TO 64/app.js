// function prevImg() {
//     document.getElementById('img').id='hide'
// }

// function getChilds() {
//     var Div = document.getElementById('view');
//     var targetPara = Div.getElementsByTagName('p')
//     var changePara = targetPara[2].innerHTML = 'Kasy Ho Yar';
// }

// function getChilds() {
//   console.log(child);
// }

// var firstEl = document.getElementById("view");
// var secondEl = firstEl.nextSibling;
// secondEl = secondEl.nextSibling;
// console.log("TCL: secondEl", secondEl)

// var Div = document.childNodes[1].childNodes[2].childNodes[1]
// var checkAttribute = Div.attributes

// var checkAttribute = Div.hasAttribute('id')

// console.log("TCL: checkAttribute", checkAttribute)
// console.log("TCL: child", Div)

// var li = document.createElement('p')
// console.log(li)
// }

// function add() {
//   var todo = document.getElementById("todo").value;
//   var ul = document.getElementById("ul");
//   var createTag = document.createElement("li");
//   var clickOnTag = createTag.setAttribute('onClick', 'remove(this)')
//   var createTxt = document.createTextNode(todo);
//   createTag.appendChild(createTxt);
//   ul.appendChild(createTag);
//   var todo = document.getElementById("todo").value = '';
// }

// function remove(ele) {
//     ele.id = 'hide'
// }
// document.getElementById("button1").onclick = add;
// function add() {
// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);}
//   var testPop = window.open("hello ", "hello ",
// alert( "width=100,height=100");
//   if (testPop === null) {
//     alert("Please disable your popup blocker.");
//   }
//   testPop.close();
// }

var db = firebase.firestore();
function call() {
  db.collection("questions")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log("data", doc.id);
        console.log("data", doc.data());
      });
    });
}
