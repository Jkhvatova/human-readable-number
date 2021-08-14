module.exports = function toReadable(number) {
    const ones = [
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
    const tens = [
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

    function convertHundreds(number) {
        if (number > 99) {
            return (
                ones[Math.floor(number / 100)] +
                " hundred " +
                convertTens[num % 100]
            );
        } else {
            return convertTens(number);
        }
    }

    function convertTens(number) {
        if (number < 20) {
            return tens[number];
        } else {
            return tens[Math.floor(number / 10)] + " " + ones[num % 10];
        }
    }
};
