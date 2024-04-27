
const btnClicked = document.getElementsByClassName("btn-click");

for (const btn of btnClicked){
	btn.addEventListener("click", function(event){

		const name = event.target.parentNode.childNodes[1].innerText;

		const selectedContainer = document.getElementById("booked-seat");

		const div = document.createElement("div");
		div.classList.add("bookedSeatStyle")

		const p1=document.createElement("p");
		const p2=document.createElement("p");
		const p3=document.createElement("p");
	
		p1.innerText = name;
		p2.innerText = "Economy";
		p3.innerText = "550";

		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(p3);

		selectedContainer.appendChild(div);

		
	
	});
	
}


const btnClickedR = document.getElementsByClassName("btn-click-r");

for (const btn of btnClickedR){
	btn.addEventListener("click", function(event){

	})
}


function getConvertedValue(id){
	const price = document.getElementById(id).innerText;
	const convertPrice = parseInt(price);
	console.log(convertPrice);
}

getConvertedValue();