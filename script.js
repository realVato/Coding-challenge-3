

function calculateTip (bill) {

    if (bill < 50) {

        return bill * 0.2;

    } else if (bill >= 50 && bill <= 200) {

        return bill * 0.15;

    } else {

        return bill * 0.1;

    }
}

var bills = [124, 48, 268];

var tips = [
            calculateTip(bills[0]), 
            calculateTip(bills[1]), 
            calculateTip(bills[2])
        ];

var finalBills = [
            bills[0] + calculateTip(bills[0]),
            bills[1] + calculateTip(bills[1]),
            bills[2] + calculateTip(bills[2])
        ];

console.log(tips);
console.log(finalBills);









