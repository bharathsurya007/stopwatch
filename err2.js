let currentBall = 1; 
 console.log("Start the over"); 
 
 while (currentBall <= 6) { 
   console.log("Start bowling");   
    try {      
        console.log("Hit the ball : " , currentBall);   
         throw new Error("Run out");  
    } catch (e) { 
       console.log("Caught!!! Its a wicket"); 
      console.log(e); 
         break;
      } finally {     
        
        currentBall++;     } }
          console.log("End the over");
