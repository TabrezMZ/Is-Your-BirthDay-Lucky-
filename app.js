const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const button = document.querySelector("#check-number")
const output = document.querySelector("#output-box")




button.addEventListener('click' ,birthdayLuckyCheck)

function birthdayLuckyCheck(){
   const date = dateOfBirth.value;
   const sum = calculateSum(date)
   if(sum && date){
    compareValues(sum, luckyNumber.value)
   }else{
    output.innerText = " plz put both values"
   }
}



function calculateSum(date){
    date = date.replaceAll("-", "")
    let sum =0
   for(let i of date){
    sum = sum + i
   }
      return sum
    }
    


function compareValues(sum, luckyNumber){
   if(sum%luckyNumber==0){
    
    output.innerText = "Your birthday is  Lucky"
   }else{
    output.innerText = "Your birthday is Not  Lucky"
   }
}




