document.querySelector("button").addEventListener("click",randoms);



function randoms() {
		handleclick();

}

function handleclick() {
	// body...
	
	var value = Math.random();
	value = value * 100;
	value = Math.floor(value);

	if (value >= 70) {
		alert("ThatS FUCKING DIABOLICAL... Why Can't you already FUCK...AWESOME..."+"Your score is " + value + "%.");
	}
	else if(value === 69){
		alert("69 69 69 69 69 YOU KNOW EXACTLY WHAT TO DO...FUCKING 69%.");
	}
	else if(value > 40 && value < 69){
		alert("You LOVE each other BUTT AS a FRIEND..."+ "Your score is " + value + "%.");
	}
	else{
		alert("FUCK-OFF..  NOT GONNA HAPPEN ...  NOT NOW.. BORN AGAIN.. " + "Your score is " + value + "%.");
	}

}