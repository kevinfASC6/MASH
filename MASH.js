// VERSION 1//
function mash() { 
    return "house";   
    } 
    //console.log(mash());  

// VERSION 2// 
function getHome() {
    var homes = ["Mansion", "Apartment", "Shack", "House", "Graveyard"]; 
    var a = (Math.floor(Math.random()*homes.length));
    return homes[a];
    } 


function getChildrenCount() { 
    return Math.floor(Math.random()*101);   
   } 

   function getCar() { 
       var car = ["Lambo", "Convertible", "Cardboard box", "Dragon with eyes", "sled"];   
       var b = (Math.floor(Math.random()*car.length)); 
       return car[b]; 

   } 
   
         function urSpouse() { 
         var spouse = ["Mary", "Jenny","Penny", "Amy"]; 
         var d = (Math.floor(Math.random()*spouse.length)); 
         return spouse[d]; 
     } 
        
       function getJob() { 
           var job = ["Doctor", "Jobless person", "Teacher", "Gamer"]; 
           var f = (Math.floor(Math.random()*job.length));  
           return job[f]; 
       } 

       function getFriends() { 
           var friends = ["has no friends", "has some friends", "has a lot of friends"]; 
           var g = (Math.floor(Math.random()*friends.length)); 
           return friends[g];
       }
       var e = Math.random() 
       if(e > 0.5) { 
           console.log("Hey " + process.argv[2] + " you are living in a " + process.argv[3] + ", has a " + process.argv[4] + " and your a " + process.argv[5] + " who " + getFriends()); 
         }
        else{ 
            console.log("Hey " + process.argv[2] + " you are living in a " + getHome() + ", has a " + getCar() + " and your a " + getJob() + " who " + getFriends()); 
        }    

        

  