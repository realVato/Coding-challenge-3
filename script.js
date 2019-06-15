var tipCalculator = function(bill) {
    if (bill < 50) {
        return bill * .2;
    } else if (bill > 50 & bill < 200) {
        return bill * .15;
    } else {
        return bill * .1;
    }
}


var bills = [124, 48, 268];

var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalBills = [
    bills[0] + tipCalculator(bills[0]),
    bills[1] + tipCalculator(bills[1]),
    bills[2] + tipCalculator(bills[2])
];

console.log(tips, finalBills);