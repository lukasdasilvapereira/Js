// checked 

const checkbox = document.getElementById('myCheckbox');
const visa = document.getElementById('Visard');
const paypal = document.getElementById('Paypalrd')
const mastercard = document.getElementById('Mastercardrd')
const submit = document.getElementById('Mysubmit')
const paragrafo1 = document.getElementById('subresult')
const paragrafo2 = document.getElementById('paymentresult')

submit.onclick = function() {
    if(checkbox.checked) {
        paragrafo1.textContent = " You are subscribed"
    }
    else {
        paragrafo1.textContent = "You are not subscribed"
    }

    if(visa.checked) {
        paragrafo2.textContent = "Payment method: Visa"
    }

    else if(mastercard.checked) {
        paragrafo2.textContent = "Payment method: Mastercard"
    }
    
    else if(paypal.checked) {
        paragrafo2.textContent = "Payment method: PayPal"
    }

    else {
        paragrafo2.textContent = "You have to select a payment method"
    }
}
