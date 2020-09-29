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



const primeGenerator = function(max) {
    // check every number up to maximum to check if they are prime
    let primes = [];
    for (let i = 2; i <= max; i++ ) {
        // check if each number is prime.
        if (isPrime(i)) {
            primes.push(i)
        } 

    }
    return primes
}

console.log(primeGenerator(100))


