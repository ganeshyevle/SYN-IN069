let a = 2; // Initialize the variable 'a' with the value 2
let flag = true; // Initialize the flag variable as true

// Check if 'a' is equal to 1
if (a == 1) {
  console.log("It is not a prime number"); // 1 is not considered a prime number
} else {
  // Loop from 2 to a/2
  for (let i = 2; i <= a / 2; i++) {
    // Check if 'a' is divisible by 'i'
    if (a % i == 0) {
      flag = false; // If 'a' is divisible by 'i', set flag to false
      break; // Exit the loop as 'a' is not a prime number
    }
  }
  // Check the value of flag after the loop
  if (flag) {
    console.log("It is a prime number=" + a); // If flag is true, 'a' is a prime number
  } else {
    console.log("Not a prime number=" + a); // If flag is false, 'a' is not a prime number
  }
}
