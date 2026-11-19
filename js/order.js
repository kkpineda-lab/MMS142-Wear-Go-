const TO_ADDRESS = "orders@examplewebsite142.com";
const form = document.querySelector("#orderForm");

function buildMailto() {
	const item = document.querySelector("#productTitle").textContent;
	const price = document.querySelector("#productPrice").textContent;
	const color = document.querySelector('input[name="shirtColor"]:checked').value;
	const size = document.querySelector('input[name="shirtSize"]:checked').value;
	const quantity = document.querySelector("#quantityInput").value;
	
	const name = document.querySelector("#customerName").value;
	const phone = document.querySelector("#customerPhone").value;
	const email = document.querySelector("#customerEmail").value;
	const address = document.querySelector("#customerAddress").value;
	const discount = document.querySelector("#discountCode").value || "None";
	const payment = document.querySelector('input[name="paymentMethod"]:checked'). value;
	
	const subject = "Order: " + item + " (" + size + ", " + color + ")";
	const body = 
		"Here are your product details:" + "\r\n\r\n" +
		
		"Product: " + item + " (" + price + ") \r\n" +
		"Color: " + color + "\r\n" +
		"Size: " + size + "\r\n" +
		"Quantity: " + quantity + "\r\n\r\n" +
		
		"Name: " + name + "\r\n" +
		"Contact Number: " + phone + "\r\n" +
		"Email: " + email + "\r\n" +
		"Address: " + address + "\r\n" +
		"Discount Code: " + discount + "\r\n" +
		"Payment Method: " + payment;
		
	return (
		"mailto:" + TO_ADDRESS +
		"?subject=" + encodeURIComponent(subject) +
		"&body=" + encodeURIComponent(body)
		);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	window.open(buildMailto(), "_blank");
});
		