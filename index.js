let searchForm = document.querySelector('.search-form');

document.querySelector("#reserveBtn").addEventListener("click",function(){
	document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
	document.querySelector(".popup").classList.remove("active");
});



document.addEventListener("DOMContentLoaded", function () {
	
    // Check Out button ID
    var checkoutBtn = document.getElementById("checkoutBtn");

    // Add a click event listener to the button
    checkoutBtn.addEventListener("click", function () {
		
        // Display an alert
        alert("Check out successfully!");

        // Automatically go back
        window.history.back();
    });
});


document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle		('active');
	shoppingCart.classList.remove	('active');
	loginForm.classList.remove		('active');
	navbar.classList.remove			('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
	shoppingCart.classList.toggle	('active');
	searchForm.classList.remove		('active');
	loginForm.classList.remove		('active');
	navbar.classList.remove			('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle			('active');
	searchForm.classList.remove		('active');
	shoppingCart.classList.remove	('active');
	loginForm.classList.remove		('active');
}

window.onscroll = () =>{
	searchForm.classList.remove		('active');
	shoppingCart.classList.remove	('active');
	loginForm.classList.remove		('active');
	navbar.classList.remove			('active');
}


document.querySelector(".popup .form button").addEventListener("click", function () {
	
    // Get values from the form fields
    var name 		= document.getElementById("name-id")		.value;
    var lastname 	= document.getElementById("lastname-id")	.value;
    var email 		= document.getElementById("email-id")		.value;
    var phoneNumber = document.getElementById("phone-number")	.value;
    var address 	= document.getElementById("address-id")		.value;
    var flavor 		= document.getElementById("flavor-id")		.value;
	var quantity 	= document.getElementById("quantity-id")	.value;

    // Check if all fields are filled
    if (name && lastname && email && phoneNumber && address && flavor && quantity) {


        // Validate email format
        if (isValidEmail(email)) {
			
            // Display a success message
            alert("Reservation successful!\nThank you, " + name + " " + lastname + "!");
            
            // Clear the form fields
            document.getElementById("name-id")		.value = "";
            document.getElementById("lastname-id")	.value = "";
            document.getElementById("email-id")		.value = "";
            document.getElementById("phone-number")	.value = "";
            document.getElementById("address-id")	.value = "";
            document.getElementById("flavor-id")	.value = "";
			document.getElementById("quantity-id")	.value = "";
            
            // Close the popup
            document.querySelector(".popup").classList.remove("active");
        } else {
            // Display an alert for invalid email format
            alert("Invalid email format. Please enter a valid email address.");
        }
    } else {
        // Display an error message
        alert("Please fill in all fields before confirming the reservation.");
    }
});

	// Function to validate email format
	function isValidEmail(email) {
		
		// Regular expression for basic email format validation
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}




