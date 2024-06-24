let a = 2;
let flag = true;
if (a == 1) {
  console.log("It is not a prime number");
} else {
  for (let i = 2; i <= a / 2; i++) {
    if (a % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log("It is a prime number=" + a);
  } else {
    console.log("Not a prime number=" + a);
  }
}
