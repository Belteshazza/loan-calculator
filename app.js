// listen of submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate Results
function calculateResults(e){
    
    console.log('calculating...');

    // Ui vars

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-Payemt');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-Interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12; 
    const calculatePayments = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = math.pow(1 + calculatedInterest, calculatePayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        
    } else {
        showError('please check your numbers');
        
    }
    
    e.preventDefault();
}

    // show Error 
function showError(error){
    // create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector

    // add class
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // clear error after 3 seconds 
    setTimeout(clearError, 3000);

    }
    
    // clear error
    function clearError() {
        document.querySelector('.alert').remove();  
    }