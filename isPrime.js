const isPrime = function(num) {
    // prime is divisible by only itself and 1 (%)
    // make sure num is not divisible by an number lower than it
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    // if number was not divisible by anything, we return true
    return true;
}

console.log(isPrime(7));

console.log(isPrime(6));
