// Console is a special keyword that the browser
// can recognise and runs sets of instructions

// Anything with quotes is treated as text - hello steer
//console.log('Hello Steer');


// Save some info in a varibale name fo later
// var box = confirm('Are you sure?');

// We can use our variables names like keywords to referece their contents

//console.log(box);

// What can jQuery do?


// Change the html
// 1. select the nav tag
// 2. update contents to new html

// start with $ sign to talk to jQuery
// $('nav').html('<h1>this is a new h1</h1>');

// Change the CSS
$('nav').css('background-color', '#8BFAA8');

// Events - Clicking, hovering, typing, scrolling

// Click on header
$('header').click(function(){
	// Everything inside the curly brackets happens when somebody clicks on the header
	console.log('clicking on the header?');

	//update to new color
	$('nav').css('background-color', '#FF7163');

});

//Add new click for .trigger
$('.trigger').click(function(){
	//Set of instructions
	console.log('click on trigger?');

	// hide/show the navigation
	// .hide(); hide oif on show
	// .show(); show if currently on hidden
	// .toggle(); switch between hidden or visable
	// .slideToggle(); switch with slide animation
	// .fadeToggle(); switch with a fade animation
	//optional duration

	$('nav').slideToggle(1000);
});
