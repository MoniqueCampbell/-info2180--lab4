window.onload = function(){
		
	//Part 1
	document.getElementById("boundary1").onmouseover = function(){
		document.getElementById("boundary1").classList.add("youlose");
	}	
			
	//Part 2 and Part 5
	document.querySelector(".boundary").onmouseover = function(){
		var x=document.querySelectorAll(".boundary");
		var i;
		for (i=0;i<x.length;i++){
			x[i].classList.add("youlose"); 
		}	
		document.body.append(document.createElement("h2").textContent = "You Lose!");			
	}
				
	//Part 3 and Part 5
	document.getElementById("end").onmouseover = function(){
		if (document.getElementsByClassName("youlose").length === 0){
			/*window.alert("You win");*/
			 document.body.append(document.createElement("h2").textContent = "You Win!");
		}
		else{
			/*window.alert("You lose");*/
			document.body.append(document.createElement("h2").textContent = "You Lose!");
		}
	}

	//Part 4
	document.getElementById("start").onclick = function(){
		var m = document.getElementsByClassName("boundary").length - 1;
		while (m >= 0){
			document.querySelectorAll(".boundary")[m].classList.remove("youlose");
	 		m--;
	    }
	}
}

		


		


