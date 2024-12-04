// Assignments -
    // pass number to a function and return addition of its digits
    // example if number is 654 then 6+5+4=15 15 must be returned by function
    function ab(num) {
        let sum = 0;
        while (num > 0) {
            var temp = num % 10;
            sum = sum + temp;
            num = Math.floor(num / 10);
        }
        return sum;
    }
let res = ab(654);

document.write(res)