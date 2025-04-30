
const button = document.getElementById("button") ;

window.addEventListener('scroll', () => {

   const isButton = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 ;

   if (isButton) {  button.innerHTML='<a href="#c1"><button id="button">  <i class="fa fa-arrow-circle-up"></i> </button></a>'} 
   else {  button.innerHTML='<i class="fa fa-arrow-circle-down"></i>'}

  

}
)
let i = 1 ;
function bdl3lya() {

    
    i++;
    if( i%2 === 0){
         
        document.getElementById("ktbabasma").innerHTML="Certificate of Appreciation awarded to Laabane Hassene by the Infinite Loop Club at Oran 1 University, in recognition of outstanding creativity and excellence in a design contest held on February 19, 2025 CERTIFICATE";
        document.getElementById("phbsama").src="chahda.jpg";
        document.getElementById("bbasma").innerHTML='<i class="fas fa-arrow-left"></i>';
        
    }else{
        document.getElementById("ktbabasma").innerHTML="Robotics and Arduino Programming Hackathon at Oran 2 University, Industrial Engineering Department HACKATHON";
        document.getElementById("phbsama").src="basma club.jpg";
        document.getElementById("bbasma").innerHTML='<i class="fas fa-arrow-right"></i>';
    }

}

