module.exports = function toReadable (number) {
  let res = '';
  let numbers = 
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  if (number == 0) return 'zero';
  if (number > 99) {
    res = numbers[Math.floor(number / 100) - 1] + ' hundred ';
    number = number % 100;
    if (number % 100 == 0) return res.trim();
  }
  if (number < 100){
    if (number<21){
      res = res + numbers[number-1];
    } else if (number > 19 && number < 30) {
      res = res +'twenty ' +  (number % 10 == 0 ? '': numbers[(number % 10) - 1]);
    } else if (number > 29 && number < 40) {
      res = res +'thirty ' +  (number % 10 == 0 ? '': numbers[(number % 10) - 1]);
    } else if (number > 39 && number < 50) {
      res = res +'forty ' + (number % 10 == 0 ? '': numbers[(number % 10) - 1]);
    } else if (number > 49 && number < 60) {
      res = res + 'fifty ' + (number % 10 == 0 ? '': numbers[(number % 10) - 1]);
    } else {
      res =res + numbers[Math.floor(number/10) - 1 ] + (Math.floor(number/10) == 8 ? 'y ' : 'ty ') + (number % 10 == 0 ? '': numbers[(number % 10) - 1]);
    }
  }
  return res.trim();
}
