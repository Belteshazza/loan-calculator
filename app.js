// listing ofr submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate Results
function calculateResults(e) {
    
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
        
    } else {
        
    }
    
    e.preventDefault();
}