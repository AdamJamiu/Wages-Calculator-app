/* Code by Adam 
github: https://github.com/AdamJamiu/Wages-Calculator-app
*/


function calCulate(){

var hoursWorked = document.getElementById("hoursWorked").value;

if(hoursWorked <= 4){
    document.getElementById("answer").textContent = hoursWorked * 1000;
}   else {
    
    document.getElementById("answer").textContent = (hoursWorked * 1000) + ((hoursWorked - 4) * 200);
} 

};

//Extra Tip Calcualtion
function extraTipCalc(){

    var hoursWorked = document.getElementById("hoursWorked").value;
    
    if(hoursWorked <= 4){
        document.getElementById("extraTip").textContent = 'no extra tip for extra hour'
    }   else {
        
        document.getElementById("extraTip").textContent = (hoursWorked * 1000) - ((hoursWorked - 4) * 200) - hoursWorked * 1000 ;
    } 
    
    }



var submit = document.getElementById("submit");
submit.onclick = function() {
    calCulate();
    extraTipCalc();
    
};




/*The hour input by the users is multiplied by 1000/hr wage rate when it is not greater than 4. But if there is any extra hour 
work the hourly wage will be subtract by 4 and multiplyied by 200 (the extra tip wage).
*/