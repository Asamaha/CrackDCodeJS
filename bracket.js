function myFunction(arg) {
    // write the body of your function here
    var parentheses = "[]{}()";
    var stack = [], character, brace;

  for(var i = 0; character = arg[i]; i++) {
    brace = parentheses.indexOf(character);

    if(brace === -1) {
      continue;
    }
    if(brace % 2 === 0) {
      stack.push(brace + 1);
    } else {
    if(stack.length === 0 || stack.pop() !== brace) {
    return false;
    }
    }
  }
    return stack.length === 0;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction('[ ( ] ) '));

function isValid(code) {

  var openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  var openers = new Set(['(', '[', '{']);
  var closers = new Set([')', ']', '}']);

  openersStack = [];

  for (var i = 0; i < code.length; i++) {
    var char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      } else {
        lastUnclosedOpener = openersStack.pop();

            // if this closer doesn't correspond to the most recently
            // seen unclosed opener, short-circuit, returning false
            if (openersToClosers[lastUnclosedOpener] !== char) {
                return false;
            }
        }
    }
  }
  return openersStack.length === 0;
}