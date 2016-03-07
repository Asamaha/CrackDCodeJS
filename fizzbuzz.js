for (var i = 1; i <= 25; i++) {
  if((i % 3 === 0) && (i % 5 === 0)) {
    console.log( "fizzbuszz");
  } else if(i % 5 === 0) {
    console.log( 'buzz');
  } else if (i % 3 === 0) {
    console.log( "fizz")
  } else {
    console.log( i);
  }
}