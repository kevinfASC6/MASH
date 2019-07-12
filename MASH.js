function mash() { 
    return "house";  
} 


function getHome() {
    var homes = ["Mansion", "Apartment", "Shack", "House", "Graveyard"]; 
    var a = (Math.floor(Math.random()*homes.length));
    return homes[a];
    } 


function getChildrenCount() { 
    return Math.floor(Math.random()*101);   
   } 
    
   
   var c = Math.random() 
   if(c > 0.5) { 
       console.log(process.argv[2]);  
       console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!");  
       } 
       else{ 
           console.log(process.argv[2]); 
           console.log("You will live in a " + process.argv[3] + ", and you will have " + getChildrenCount() + " kids!"); 
       } 

   var c = Math.random() 
   if(c > 0.5) { 
       console.log(process.argv[2]);  
       console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!");  
       } 
       else{ 
           console.log(process.argv[2]); 
           console.log("You will live in a " + getHome() + ", and you will have " + process.argv[4] + " kids!"); 
       }

   function getCar() { 
       var car = ["Lambo", "Convertible", "Cardboard box", "Dragon with eyes", "sled"];   
       var b = (Math.floor(Math.random()*car.length)); 
       return car[b]; 

   } 
   console.log("You will live in a " + getHome() + ", and you will have " + " kids" + ", and you will drive a " + getCar())
    
   var c = Math.random() 
   if(c > 0.5) { 
       console.log(process.argv[2]);  
       console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", and you will drive a " + process.argv[5]);  
       } 
       else{ 
           console.log(process.argv[2]); 
           console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", and you will drive a " + getCar()); 
       }
      
     function urSpouse() { 
         var spouse = ["Mary", "Jenny","Penny", "Amy"]; 
         var d = (Math.floor(Math.random()*spouse.length)); 
         return spouse[d]; 
     } 
      
       console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids" + ", and you will drive a " + getCar())
        
       function getJob() { 
           var job = ["Doctor", "Jobless person", "Teacher", "Gamer"]; 
           var f = (Math.floor(Math.random()*job.length));  
           return job[f]; 
       }
       var e = Math.random() 
       if(e > 0.5) { 
           console.log("Hey " + process.argv[2] + " you are living in a " + process.argv[3] + ", has a " + process.argv[4] + " and your a " + process.argv[5] + " who has no friends"); 
         }
        else{ 
            console.log("Hey " + process.argv[2] + " you are living in a " + getHome() + ", has a " + getCar() + " and your a " + getJob() + " who has some friends")
        }