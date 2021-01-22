// https://github.com/sheikhlimon/javascript-problem-solving


// First problem convert kilometer to meter

function kilometerToMeter(kilometers) {
    var meters
    // check the value positive or negative and multiply kilometers by 1000
    if (kilometers > 0) {
        meters = kilometers * 1000;
    } else {
        meters = 'Distance cannot be negative';
    }
    return meters;
}

// Second problem create a budget calculator

function budgetCalculator(watch, mobile, laptop) {
    // multiply three parameters using given numbers and add them
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    return watchPrice + mobilePrice + laptopPrice;
}

// Third problem find out the hotel cost

function hotelCost(days) {
    var cost = 0;
    // multiply 100 with given days if its less than or equal to 10
    if (days <= 10) {
        cost = days * 100;
        // multiply 80 with given days if its less than or equal to 20
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;
    }
    // multiply 50 with given days if its more than 20
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var restDays = remainingDays * 50;
        cost = firstTenDays + secondTenDays + restDays;
    }
    return cost;
}

//Return the longest string in megaFriend

function megaFriend(arr) {
    var longestString = arr[0];
    //compare the index length and show the largest string
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
        else {
            longestString = 'Array cannot be empty';
        }
    }
    return longestString;
}