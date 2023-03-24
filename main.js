let div=document.querySelector(".container");

let plusbtn=document.createElement("button");
plusbtn.innerHTML="+";
div.appendChild(plusbtn);

let inputval=document.createElement("input");
inputval.type="text";
inputval.classList.add("values-input");
div.appendChild(inputval);
inputval.value=5;


let minusbtn=document.createElement("button");
minusbtn.innerHTML="-";
div.appendChild(minusbtn);

plusbtn.addEventListener("click",addFun);
function addFun()
{
	let val=parseInt(document.querySelector(".values-input").value);
	console.log(val);
	val++;
	document.querySelector(".values-input").value=val;
}

minusbtn.addEventListener("click",subFun);
function subFun()
{
	let val=parseInt(document.querySelector(".values-input").value);
	console.log(val);
	val--;
	document.querySelector(".values-input").value=val;
}