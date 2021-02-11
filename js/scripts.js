var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}

// get the button and make it respond to a click
var theButton = document.getElementById("b");
theButton.onclick = feedTheButton;

function Score( input ) {
  if(input==0){return "A bit of a bird brain..."}
  else if(input <= 2 && input >= 1){return "Pretty hawkward."}
  else if(input <= 4 && input >= 3){return "A chirp off the ol' block!"}
  else if(input <= 6 && input >= 5){return "Stork raven mad!!"}
  else{return "Oops – enter a valid number."}
  }

// this function runs each time the button is clicked
function feedTheButton() {
	// get the response from the text input field
	// parseInt() changes string to number
	var input = parseInt(document.getElementById("in").value);
  // run the function above this one and store what is returned in result
  var result = Score( input );
  // write the result into the HTML
  var place = document.getElementById("write");
  place.innerHTML = result;
}
