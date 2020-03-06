// listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    
    // Hide results
   document.getElementById('results').style.display = 'none';

   // show loding
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// calculate Results
function calculateResults(){
    
    console.log('Calculating...');

    // UI Vars

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-Payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest'); 

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12; 
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x* calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        
        
    } else {
        showError('please check your numbers');
    }
    
}

    // show Error 
function showError(error){
    
    // show results
    document.getElementById('results').style.display = 'none';

    // hide loding
    document.getElementById('loading').style.display = 'none'; 
    // create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds 
    setTimeout(clearError, 3000);

    }
    
    // clear error
    function clearError(){
        document.querySelector('.alert').remove();  
    }