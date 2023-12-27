function sum(a : number, b : number, c? : number): number {
    if (c) {
        return(a + b + c);
    }
    else{
        return(a + b);
    }
}
const sumValue = sum(12, 1)
console.log(sumValue);
export { }