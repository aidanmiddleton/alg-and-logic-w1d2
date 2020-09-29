const GCD = function (num1, num2) {
    // determine which number is higher and which number is lower. 
    let higher = Math.max(num1, num2);
    let lower = Math.min(num1, num2);
    while (lower) {
        let tempLower = lower;
        lower = lower % higher; 
        higher = tempLower;
    }
    return higher;
};

const LCM = function (num1, num2) {
    return num1 * num2 / GCD(num1, num2);
};