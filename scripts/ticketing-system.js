
const btnClicked = document.getElementsByClassName("btn-click");

for (const btn of btnClicked){
	btn.addEventListener("click", function(event){

		const name = event.target.parentNode.childNodes[1].innerText;

		const selectedContainer = document.getElementById("booked-seat");

		// if user wants select a seat twice, in that case..
		event.target.setAttribute("disabled",false);  // now user can't select a seat multiple times. Once a button is selected, it's disabled.		

		// BreakPoint: if user exceed maximum seat limit, break the loop
		const seatLeft = getConvertedValue("seat-limit");
		if (seatLeft-1 < 0){
			alert("Maximum Seat Booking Limit is 4");
		    return;
		}

		event.target.parentNode.childNodes[1].style.backgroundColor = "green";  // if user select a seat i.e. A1 the button will be green now

		// update number of available seats
		const availableSeat = getConvertedValue("available-seat")-1;
		document.getElementById("available-seat").innerText = availableSeat;

		const seatCount = getConvertedValue("seat-count")+1;
		document.getElementById("seat-count").innerText=seatCount;
		if (seatCount == 4) {
			showElement("coupon-display");
		}
		
		// initially this element is hiddent in layout, it's needed for breakpoint
		const seatLimit = getConvertedValue("seat-limit")-1;
		document.getElementById("seat-limit").innerText = seatLimit;
 
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

// show next button when input field are filled
	const submitBtn = document.getElementById("next-btn");
    submitBtn.addEventListener("click", function(event){   // Event listener for input changes
		const userName = document.getElementById("user-name").value.trim();
		const userNumber = document.getElementById("user-number").value.trim();
		const userEmail = document.getElementById("user-email").value.trim();
		if (userName && userNumber && userEmail) {
			event.target.setAttribute("disabled",true);  // now user can't select a seat multiple times. Once a button is selected, it's disabled.		
         //   submitBtn.classList.replace("bg-gray-300", "bg-blue-500");
		  } else {
		   // If any field is empty, hide the button
		    event.target.setAttribute("disabled",false);  // now user can't select a seat multiple times. Once a button is selected, it's disabled.		
		//   submitBtn.classList.replace("bg-gray-300", "bg-blue-500");
		  }	  
 
	})
	

// This function return the innertext or content of the element
function getConvertedValue(id){
	const price = document.getElementById(id).innerText;
	const convertPrice = parseInt(price);
	return convertPrice;
}

function UpdateTotalPrice(value){
//	console.log(value);
	const TotalPrice = getConvertedValue("total-price");
    const sum = TotalPrice + value;
	document.getElementById("total-price").innerText = sum;  // imp

}


function getElementHidden(id){
	const hiddenElement = document.getElementById(id);
//	console.log(couponSystem);
	hiddenElement.classList.add("hidden");
}

function showElement(id){
	const showElement = document.getElementById(id);
//	console.log(couponSystem);
	showElement.classList.remove("hidden");
}


// Grand Total : using coupon code or without coupon code
function UpdateGrandTotal(status){
	// console.log(status);
	if (status == undefined){   // means this not occur from coupon code apply button. 
		const GrandTotal = getConvertedValue("total-price");
		document.getElementById("grand-total").innerText = GrandTotal;   
	}
	else {   // using coupon code, user will get discount
        const couponCode = document.getElementById("coupon-code").value;  // as it is input field so use .value instead of .innerText
		if (couponCode === "NEW15"){
			const GrandTotal = getConvertedValue("total-price");
			const discount = GrandTotal*0.15;
			document.getElementById("grand-total").innerText = GrandTotal-discount;   	

			// once coupon code is applied, it will disabled.
	            getElementHidden("coupon-hidden");
		}
		else if (couponCode === "Couple 20"){
			const GrandTotal = getConvertedValue("total-price");
			const discount = GrandTotal*0.2;
			document.getElementById("grand-total").innerText = GrandTotal-discount;   
			
			// once coupon code is applied, it will disabled.
			   getElementHidden("coupon-hidden");
		}
		else {
			alert("Please Enter Valid Coupon Code");
		}
	}

}

