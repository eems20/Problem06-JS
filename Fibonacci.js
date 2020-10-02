class Fibonacci {
    getFibonacciValue(a){
       // let divisor = -1;
       // testing initial conditinos of a is 0 or 1, return that
        if (a == 0 ){
            return 0;
        }
        if (a == 1 ){
            return 1;
        }
        // else return the fibonacci calculation 
        return this.getFibonacciValue(a-1) + this.getFibonacciValue(a-2);
       // return divisor;
    }
}

module.exports = Fibonacci;