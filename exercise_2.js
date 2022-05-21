// Transportation on vacation


// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).


function rentalCarCost(d) {
    // Your solution here
    let totalRentalCost;
    if(d >= 7){
        totalRentalCost = (d * 40) - 50;
        return totalRentalCost
    } else if (d < 7){
        totalRentalCost = (d * 40) - 20;
        return totalRentalCost
    }
}

console.log(rentalCarCost(3))