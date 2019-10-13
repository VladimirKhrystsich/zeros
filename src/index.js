module.exports = function zeros(expression) {
    var arr = expression.split('*');
    var answer = 0;

    function howManyZeros(str) {
        var num = parseInt(str);
        var amountOfFive = 0;
        var rest;
        if (num < 5) {
            amountOfFive = 0;
        } else {
            for (let i = num; i > 0; i--) {
                if (i % 5 == 0) {
                    amountOfFive++;
                }
            }
            rest = amountOfFive / 5;
            if (amountOfFive % 5 == 0) {
                amountOfFive = amountOfFive + rest;
                while (rest % 5 == 0) {
                    rest = rest / 5;
                    amountOfFive = amountOfFive + rest;
                }
            } else {
                if ((rest > 1) && (amountOfFive <= 10)) {
                    amountOfFive++;
                } else {
                    for (let k = rest; k > 1; k--) {
                        amountOfFive++;
                    }
                }
            }
        }
        return amountOfFive;
    }
    for (var i = 0; i < arr.length; i++) {
        answer = answer + howManyZeros(parseInt(arr[i]));
    }
    return answer;
}
