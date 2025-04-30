 let i = 1 ;
 document.getElementById('submit').onclick = function () {
   i++;
   if (i%2 === 0) {
    document.body.style.backgroundColor="white";
    
    const image = 
    document.getElementById("lamba-img");
    image.src="lampa-ch3la.jpg";
    image.style.width="10%";
    image.style.left="43%"}
    else{
      document.body.style.backgroundColor="rgba(0, 0, 0, 0.981)";
    
      const image = 
      document.getElementById("lamba-img");
      image.src="lampa-tafya.jpg";
      image.style.width="30%";
      image.style.left="33%";
    }
    
 } 