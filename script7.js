let numbers = [10,8,7,9,8,9,7];
console.log(numbers)
alert(numbers);

//sum the values (** high level use the for loop)

var sum = numbers.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);

//calculate the average (length) ( ** high level use the length function)
var average = numbers.length;
console.log(average);

//display the average
average = (sum/average);
console.log(average);
alert(average);