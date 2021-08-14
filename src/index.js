module.exports = function toReadable(number) {
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    }
    return convertHundreds(number).trim();

    function convertHundreds(number) {
        if (number > 99) {
            return (
                ones[Math.floor(number / 100)] +
                " hundred " +
                convertTens(number % 100)
            );
        } else {
            return convertTens(number);
        }
    }

    function convertTens(number) {
        if (number < 20) {
            return ones[number];
        } else {
            return tens[Math.floor(number / 10)] + " " + ones[number % 10];
        }
    }
};
