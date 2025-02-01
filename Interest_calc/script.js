function calculate(){
    

    const Total_amount = document.getElementById("total-amount");
    const Principal_input = document.getElementById("principal");
    const Rate = document.getElementById("rate");
    const Years = document.getElementById("years");


    let principal = Number(Principal_input.value);
    let rate = Number( Rate.value /100 );
    let years = Number(Years.value);


    if(principal < 0 || isNaN(principal)){
        principal = 0;
        Principal_input.value = 0;
    }
  
    if(rate < 0 || isNaN(rate)  ){
        rate = 0;
        Rate.value = 0;
    }

    if(years < 0 || isNaN(years) ){
        years = 0;
        Years.value = 0;
    }

    const result = principal * Math.pow( (1 + rate/ 1), 1 * years )

    Total_amount.textContent = result.toLocaleString(undefined,{style:"currency" , currency:"INR",}) 


}