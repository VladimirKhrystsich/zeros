module.exports = function zeros(expression) {
    var arr = expression.split('*');
    var answer = 0;
    var arrDoubleFactorial = [];
    var amountOfTwos = 0;
    var amountOfFives = 0;

    function sorter(arr) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[j].lastIndexOf('!!') > 0) {
                arrDoubleFactorial.push(arr[j]);
                arr.splice(j, 1);
            }
        }
    }

    sorter(arr);

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

    function howManyZerosDoubleFac(str) {
        var num = parseInt(str);
        var amountOfZeros = 0;
        if (num % 2 == 0) {
            if (num < 10) {
                for (let i = num; i > 1; i--) {
                    if (i % 2 == 0) {
                        amountOfTwos++;
                    }
                }
            } else {
                while (num >= 2) {
                    amountOfTwos++;
                    num = num - 2;
                }
            }
        } else {

            if (num < 5) {
                amountOfFives = amountOfFives + 0;
            } else {
                while (num >= 5) {
                    if (num % 5 == 0) {
                        amountOfFives++;
                    }
                    num = num - 2;
                }
            }
        }
        if (amountOfTwos > 5) {
            var zeros = amountOfTwos;
            while (amountOfTwos >= 5) {
                answer++;
                zeros = zeros - 5;
            }
        }
    }


    for (let i = 0; i < arr.length; i++) {
        answer = answer + howManyZeros(parseInt(arr[i]));
    }
    for (let k = 0; k < arrDoubleFactorial.length; k++) {
        howManyZerosDoubleFac(parseInt(arrDoubleFactorial[k]));
    }
    if (amountOfTwos > amountOfFives) {
        answer = answer + amountOfFives;
    } else {
        answer = answer + amountOfTwos;
    }

    return answer;
}
