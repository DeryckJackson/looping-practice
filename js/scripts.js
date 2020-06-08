$(document).ready(function() {
  friends.forEach(function(friend) {
    alert(friend);
  })
  let sum = 0;
  numbers.forEach(function(num) {
    sum += num;
  })
  alert(sum);
});

const friends = ["Chris", "Alaina", "James", "Skip"];
const numbers = [42, 10, 22, 49, 68, 33];