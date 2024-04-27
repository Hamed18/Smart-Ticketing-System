
const btnClicked = document.getElementsByClassName("btn-click");

for (const btn of btnClicked){
	btn.addEventListener("click", function(event){

		const name = event.target.parentNode.childNodes[1].innerText;

		const selectedContainer = document.getElementById("booked-seat");

		// update number of available seats
		const availableSeat = getConvertedValue("available-seat")-1;
		document.getElementById("available-seat").innerText = availableSeat;
		
 
		// Now create parent div and child paragraph tag using DOM
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
        
		// display and update Total Price when user click a seat button i.e. A1, A3 and so on
		const price = 550;
		UpdateTotalPrice(price);
		
		// display and update Grand Total when user click a seat button i.e. A1, A3 and so on
		UpdateGrandTotal();
	
	});
	
}


function UpdateTotalPrice(value){
//	console.log(value);
	const TotalPrice = getConvertedValue("total-price");
    const sum = TotalPrice + value;
	document.getElementById("total-price").innerText = sum;  // imp

}

// This function return the innertext or content of the element
function getConvertedValue(id){
	const price = document.getElementById(id).innerText;
	const convertPrice = parseInt(price);
	return convertPrice;
}

function UpdateGrandTotal(status){
	if (status == undefined){   // means this not occur from coupon code. 
		const GrandTotal = getConvertedValue("total-price");
		document.getElementById("grand-total").innerText = GrandTotal;   
	}
	else {   // using coupon code, user will get discount
        const couponCode = document.getElementById("coupon-code").value;
		if (couponCode === "NEW15"){
			const GrandTotal = getConvertedValue("total-price");
			const discount = GrandTotal*0.15;
			document.getElementById("grand-total").innerText = GrandTotal-discount;   
	
		}
		else if (couponCode === "Couple 20"){
			const GrandTotal = getConvertedValue("total-price");
			const discount = GrandTotal*0.2;
			document.getElementById("grand-total").innerText = GrandTotal-discount;   

		}
		else {
			alert("Please Enter Valid Coupon Code");
		}
	}
}