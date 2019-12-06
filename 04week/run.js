var subTwoFunctions = function(f1, f2) {
	return function (x, y) {
         // Search: arguments object in js
      
        return f1(x, y) - f2(x, y);
  }
}
// functions as first-class citizens
// higher order functions: functions that take as input other functions

//arguments -

var my_func = function (x, y) {
  return x + y + 1;
}

var my_func2 = function (x, y) {
  return x + y;
}

var final_function = subTwoFunctions(my_func, my_func2);

var final2 = subTwoFunctions(my_func2, my_func);

final_function(3, 3);
//-----

var f = function () {.....}

if (cond) {
f = function () {. something else ...}
}

f()