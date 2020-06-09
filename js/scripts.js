$(document).ready(function() {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  alert(sum);

  for (i = 0; i < friends.length; i++) {
    alert(friends[i]);
  }
});

const friends = ["Chris", "Alaina", "James", "Skip"];
const numbers = [42, 10, 22, 49, 68, 33];

// i-- === i -= 1