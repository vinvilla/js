function fiboSeries(n) {

  var a = [0, 1];

  if (n == 1) {
    a.pop();
  } else if (n > 2) {
    for (var i = 2; i < n; i++) {
      a.push(a[i - 1] + a[i - 2]);
    }
  }
  return a;
}

console.log(fiboSeries(Math.floor(Math.random()*10)));
