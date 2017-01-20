// When user clicks button #showmodal
	// Fade in background .modal-background
$('#showModal').on('click', function (event) {
	event.preventDefault();
	$('.modal-background').fadeIn('fast')
    $(".modal-background")
    	.css("display", "flex")
    	.hide()
    	.fadeIn();
});


// When user clicks close button #close
	// Fade out .modal-background
$('.close').on('click', function () {
	$('.modal-background').fadeOut('fast');
	// $('.modal-content').hide();
});

// Make it rain!

// Not sure exactly what parts of project I need JS and Jquery for, but here's the start of my list:
// 1. Dropdown menu from navigation (not sure if I need this but it might be good to incorporate as an exercise)
// 2. Accordions for content (this could be on the My Reviews page to just show the first bit of reviews)
// 3. Forms/User Input
// 4. Modal Window
// 5. Sidebar menu
// 6. Sticky nav
// 7. Reading Lists

// I'm thinking for the pages I want to focus on I'll do #3 Forms + #7 Reading Lists

// Reading Lists local storage https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
// Google "local storage jQuery"

// Question: For sticky nav - we don't need Javascript/Jquery for just making it stick right? In the Sticky Nav example we used it to make is stick after a certain distance scrolled.

//PSEUDO CODE

// FORMS

// User must click one of buttons to enter the site (join or login)

// If user clicks join
	// Show the join form 

var map;

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});




}

// When the find the club form is submitted
$('#find-club-zip').on('submit', function(e) {
	// Prevent the page from reloading
	e.preventDefault();

	// Find out what zip code the user entered into the #zipCode field
	var zipCode = $('#zipCode').val();

	// Optional: could add validation here to make sure user entered a value

	// Make a request to Google's Geocode API to get the latitude and longitude for the zip code.
	$.ajax({
      type: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' + zipCode + '&key=AIzaSyC-xI2EfFnKySmN5evdNwZWHCvwzpJwxWc',
      success: function( response ) {
      	// If the request for lat/lng is successful:

        // Get the latitude from the response object
        var latitude = response.results[0].geometry.location.lat;

        // Get the longitude from the response object
        var longitude = response.results[0].geometry.location.lng;

        // Format the latitude/longitude pair in Google API's formatting
        var latLng = new google.maps.LatLng(latitude, longitude);

        // Pan (move) the map to that zip code
        map.panTo(latLng);

        // Zoom in on location. To zoom in more, make number higher.
        map.setZoom(12);
      }
});
	
});


// If user clicks close button on modal
	// Hide the modal
	

// When the user submits the join form


	// If user does not fill out any required field, they get error message 'Required' 
	// Google "jQuery see if input field is empty" look for Stack O
	
$('#apply-form input').blur(function()
{
    if( $(this).val().length === 0 ) {
        $(this).parents('p').addClass('error');
    }
});



	// If user hasn't filled out user Name Field
		// Add an error class
	// Else 
		// Remove Error Class

// if (userName === "") {
// 	$('#userName').addClass('error');
// } else {
// 	$('#userName').removeClass('error')
// }

	// If user hasn't filled out Password Field
		// Add an error class
	// Else 
		// Remove Error Class

// if (password === "") {
// 	$('#password').addClass('error');
// } else {
// 	$('#password').removeClass('error')
// }




// If First Name is not blank AND Last Name is not blank AND  (#first-name.val() !== '')

		// "jQuery take user to another html file"
		// Takes user to Find a Club page








// If user clicks login
	// user must enter: Email, password
	// Takes user to My Club page









// READING LISTS

// User can click button to add books to reading list






