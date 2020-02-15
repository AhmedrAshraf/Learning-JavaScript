// number=prompt("Enter your Number here");
// for(var i=1;i<=10;i++)
// {
//     total=number*i;
//     console.log(number+"x"+i+"="+total);
//     document.write(number+"x"+i+"="+total+"<br>");
// }
// function table()
// {
// number=prompt("Enter your Number here");
// for(var i=1;i<=10;i++)
// {
//     total=number*i;
//     var tab=number+"x"+i+"="+total+"<br>";
//     console.log(number+"x"+i+"="+total);
//     document.getElementById('taBLE').innerHTML=tab;
// }
// if(number%2 !==0)
// {   
//     document.getElementById('even').innerHTML="Number is odd";
// }
// else
// {
//     document.getElementById('even').innerHTML="Number is even";
// }
// }
var  arr=[];
for(var i=0;i<4;i++)
    {
        var dish=prompt("Enter your Dishes here!!!");
        arr.push(dish);
    }
for(var j=0;j<arr.ptlength;j++)
    {
        console.log(arr[j])
    }
function deletedish()
{   console.log("After Delete")
    var dishdel=prompt("Enter your Dish for Delete here!!!");
    var index=arr.indexOf(dishdel);
    if(index==0)
    {
        arr.splice(index,index+1);
    }
    else
    {
        arr.splice(index,1);
    }
    for(var j=0;j<arr.length;j++)
    {
        console.log(arr[j]);
    }
}