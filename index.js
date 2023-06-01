let totalElement = document.getElementById('totalId')
let amount = 0

function change(n) {
    amount = amount + n
    totalElement.innerHTML = 'יש לך ' + amount + ' שקלים'
}
