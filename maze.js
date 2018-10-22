


	window.onload = function(){
		

		/*document.getElementById("boundary1").onmouseover = function(){

			document.getElementById("boundary1").classList.add("youlose");*/
			
			
			
			document.querySelector(".boundary").onmouseover = function(){
					var x=document.querySelectorAll(".boundary");
				var i;
				for (i=0;i<x.length;i++){
					x[i].classList.add("youlose"); 
					}
					
				}
				/*Line 24 and 26 works*/
				document.getElementById("end").onmouseover = function(){
if (document.getElementsByClassName("youlose").length === 0)
			{
			window.alert("You win");
			}
			/*<h2 id="status">"You win"</h2>
			<h2 id="status">"You lose"</h2>
			document.getElementById("status").innerHTML="You win";
			document.getElementById("status").innerHTML="You lose";
				} };
			*/
		}}

		


		


