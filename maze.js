


	window.onload = function(){
		
		//Part 1
		/*document.getElementById("boundary1").onmouseover = function(){

			document.getElementById("boundary1").classList.add("youlose");*/
			
			
			//Part2
			document.querySelector(".boundary").onmouseover = function(){
					var x=document.querySelectorAll(".boundary");
				var i;
				for (i=0;i<x.length;i++){
					x[i].classList.add("youlose"); 
					}
					
				}
				/*Line 24 and 26 works*/
				//Part3
				document.getElementById("end").onmouseover = function(){
				if (document.getElementsByClassName("youlose").length === 0){
					window.alert("You win");
			} else{
				window.alert("You lose");
				}
			}


			//Part4
			document.getElementById("start").onclick = function(){
			var m = document.getElementsByClassName("boundary").length - 1;
			while (m >= 0)
			{
				document.querySelectorAll(".boundary")[m].classList.remove("youlose");
	 			m--;
	    	}
		
			/*<h2 id="status">"You win"</h2>
			<h2 id="status">"You lose"</h2>
			document.getElementById("status").innerHTML="You win";
			document.getElementById("status").innerHTML="You lose";
				} };
			*/
		}}

		


		


