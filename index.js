let score = document.getElementById("score")


var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

function findScore(){
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    console.log(loveScore);
    if (loveScore > 70) {
        score.textContent = "Your love score is " + loveScore + "%" + " You love each other like Kayne loves Kayne.";
      
     } 
     
     if (loveScore > 30 && loveScore <= 70) {
         score.textContent = "Your love score is " + loveScore + "%" + " You're like halfway there, not quite though.";  
     }

     
     if (loveScore <= 30) {
        score.textContent = "Your love score is " + loveScore + "%" + " You go together like oil and water.";
     }

    

}

