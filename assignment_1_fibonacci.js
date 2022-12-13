// method 1: iteration
function fibs(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let i1 = 0;
  let i2 = 1;
  let i3;
  let target_array = [0, 1];
  for (let i = 3; i <= n; i++) {
    i3 = i1 + i2;
    target_array.push(i3);
    i1 = i2;
    i2 = i3;
  }
  return target_array;
}

// method 2: recursion - two functions

// function fibs will return the n-th item of the fibonacci sequence
function fib_number(n) {
  if (n == 1) return 0;
  else if (n == 2) return 1;
  else return fib_number(n - 1) + fib_number(n - 2);
}

// function fibs will return an array composed of the first n fibonacci numbers
function fibs(n) {
  let target_array = [];
  for (let i = 1; i <= n; i++) {
    const item_n_in_fibs = fib_number(i);
    target_array.push(item_n_in_fibs);
  }
  return target_array;
}

// method 3: recursion - one function
function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let i1 = fibsRec(n - 2)[n - 3];
  let i2 = fibsRec(n - 1)[n - 2];
  let i3 = i1 + i2;
  let pre_array = fibsRec(n - 1);
  return pre_array.concat([i3]);
}
