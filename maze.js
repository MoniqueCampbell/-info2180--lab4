


	window.onload = function(){
		// document.addEventListener("mouseover",document.getElementsByClassName("div.youlose")

		/*document.getElementById("boundary1").onmouseover = function(){

			document.getElementById("boundary1").classList.add("youlose");
			console.log(5+8);*/
			
			/*document.querySelectorAll(".boundary").onmouseover= function(){
window.alert(7);
				document.getElementById("boundary").classList.add("youlose")*/
			document.querySelector(".boundary").onmouseover = function(){
					var x=document.querySelectorAll(".boundary");
				var i;
				for (i=0;i<x.length;i++){
					x[i].classList.add("youlose"); 
					}
					
				}
				/*document.getElementById("end").onmouseover = function(){

			window.alert("You lose");
			<h2 id="status">"You win"</h2>
			<h2 id="status">"You lose"</h2>
			document.getElementById("status").innerHTML="You win";
			document.getElementById("status").innerHTML="You lose";*/
				};
			

		


		


