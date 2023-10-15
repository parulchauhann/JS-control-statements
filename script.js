// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var n = 0;
while (n < 100) {
  n++;
  if ( n % 2 != 0)
  console.log(n);
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var i = 0;
do {
  i += 3;
  console.log(i);
} while (i < 99);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

var n = 100;

for (i = 2 ;i < n; i++){
  let prime = true
  for(p = 2; p < i; p++){
    if (i % p == 0){
      prime = false
    }
  }
  if (prime) {
    console.log(i)
  }
}