// Variable
const bill = document.querySelector("#bill");

const numOfPeople = document.querySelector("#people-num");

const selectedService = document.querySelector("#service-percent");

const tip = document.querySelector(".result-value");

const button = document.querySelector(".btn");

// Function to check values
function checkValues(){
    if((Number(numOfPeople.value) === 0) || Number(bill.value) === 0){
        alert("Bill Amount or Number of People cannot be equal to 0")
        document.querySelector(".result-inner").style.display = "none";
    }else if(Number(numOfPeople.value) !== 1){
        document.querySelector(".each").style.display = "block";
    }else{
        document.querySelector(".each").style.display = "none";
    }
};

// Event Listener
button.addEventListener("click", ()=>{

    const sum = Number((Number(bill.value) * Number(selectedService.value) / Number(numOfPeople.value)).toFixed(2));
    
    if((typeof sum === "number") && (!isNaN(sum))){
        tip.innerText = sum;
        document.querySelector(".result-inner").style.display = "block";
    }else{
        document.querySelector(".result-inner").style.display = "none";
        alert("Only numbers!!!");
    }
    
    checkValues();
    
    // SetTimeOut (just to practice)
    // setTimeout(()=>{
    //     document.querySelector(".result-inner").style.display = "none";
    // },5000)
    
});
