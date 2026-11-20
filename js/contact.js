const contactForm = document.querySelector("#contactForm");

if(contactForm) {
	function buildContactMailto() {
		const name = document.querySelector("#contacterName").value;
		const email = document.querySelector("#contacterEmail").value;
		const message = document.querySelector("#contacterMessage").value;
	
		const subject = "Website inquiry"
		const body =
			"Name: " + name + "\r\n" +
			"Email: " + email + "\r\n\r\n" +
			message;
		
		return (
			"mailto:hello@wearandgo142.com" +
			"?subject=" + encodeURIComponent(subject) +
			"&body=" + encodeURIComponent(body)
		);
	}
	
	contactForm.addEventListener("submit", function (event) {
		event.preventDefault();
		window.open(buildContactMailto(), "_blank");
		document.querySelector("#contactDialog").close();
		document.querySelector("#redirectDialog").showModal()
	});	
}
