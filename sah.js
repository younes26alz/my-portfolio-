function Submit() { 
   let i = 0 ;

   const q1 = document.querySelector('input[name=q1]:checked');
   if (q1 && q1.value ==="1") {
    i++ ;
    document.getElementById("jawab1").innerHTML = "correct ";
   } else {
    document.getElementById("jawab1").innerHTML = "Cest la bonne réponse ";
   }

   const q2 = document.querySelector('input[name=q2]:checked');
   if (q2 && q2.value ==="1") {
    i++ ;
    document.getElementById("jawab2").innerHTML = "correct ";
   } else {
    document.getElementById("jawab2").innerHTML = "Cest la bonne réponse ";
   }

   const q3 = document.querySelector('input[name=q3]:checked');
   if (q3 && q3.value ==="1") {
    i++ ;
    document.getElementById("jawab3").innerHTML = "correct ";
   } else {
    document.getElementById("jawab3").innerHTML = "Cest la bonne réponse ";
   }


  switch(i){
     case 3 :  document.getElementById("msg").innerHTML = "tu es intelligent 3/3 " ; break ;

     case 2 :  document.getElementById("msg").innerHTML = "Votre intelligent va bien  2/3 "; break ; 

     case 1 :  document.getElementById("msg").innerHTML = " tu es moyen 1/3 "; break ; 

     case 0 :  document.getElementById("msg").innerHTML = " je m excuse , Votre réponse est fausse 0/3"; break ;  
       }

}