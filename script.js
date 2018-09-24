
function sleep_in(x,y) {
    if(x == false || y == true){
        return true;
    } else{
        return false;
    }
}

function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile){
        return true;
    } else{
        return false;
    }
}

function string_times(string, n) {
    var text = string;

    if(n == 0){
        text = "";
        return text;
    }

    for(var i = 1; i < n; i++){
        if(n > 0){
            text = text + string;
        }
    }
    return text;
}

function front_times(string, n){
    var result = "";
    var length = string.substring(0,3);

    for(var i = 0; i < n; i++){
        result = result + length;
    }
    return result;
}

function string_bits(string){
    var length = string.length;
    var result = "";

    if(length <= 2){
        for(var a = 0; a < length; a = a + 3){
            var everyOther = string.substring(1,i);
            result = result + everyOther;
        }
    }else{
        for(var i = 0; i < length; i = i + 2){
            var everyOther = string.substring(0,i);
            everyOther = string.substring(i, i + 1)
            result = result + everyOther;
        }
    }

    return result;
}

function caughtSpeeding(speed, birthday){
    if(birthday == true){
        if(speed <= 65){
            return 0;
        }
        if(speed >= 66 && speed <= 85){
            return 1;
        }
        if(speed >= 86){
            return 2;
        }
    } else {
        if(speed <= 60){
            return 0;
        }
        if(speed >= 61 && speed <= 80){
            return 1;
        }
        if(speed >= 81){
            return 2;
        }
    }
}

function fizz_buzz(num){
    if(num % 3 == 0){
        if(num % 5 == 0){
            var result = "FizzBuzz";
        }else{
            result = "Fizz";
        }
    }
    if(num % 5 == 0 && num % 3 != 0){
        result = "Buzz";
    }

    if(num % 5 != 0 && num % 3 != 0){
        result = num + "!";
    }

    return result;
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    } else{
        if(tea >= (candy * 2) || candy >= (tea * 2)){
            return 2;
        }
        if(tea >= 5 && candy >= 5){
            return 1;
        }
    }
}

function blackjack(first, second){
    var firstResult = first - 21;
    var secondResult = second - 21;

    if(first > 21 && second > 21){
        return 0;
    } else{
        if(first > 21 && second <= 21){
            return second;
        }

        if(first <= 21 && second > 21){
            return first;
        }

    }

    if(firstResult > secondResult){
        return first;
    }else{
        return second;
    }

}

function loneSum(a, b, c){
    var groupOne = a == b;
    var groupTwo = a == c;
    var groupThree = b == c;

    var sum = a + b + c;

    var sumTrue = sum / a == 3;

    if(sumTrue == true){
        return 0;
    }

    if(sumTrue == false){
        if(groupOne == true){
            return c;
        }

        if(groupTwo == true){
            return b;
        }

        if(groupThree == true){
            return a;
        }

        return sum;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
