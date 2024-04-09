function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function areAllPrimes(arr: number[]): boolean {
    for (let num of arr) {
        if (!isPrime(num)) {
            return false;
        }
    }
    return true;
}

console.log(areAllPrimes([1,3,4,2,7,9,32,43,12,45]));
console.log(areAllPrimes([3,5,7,11,13]));
