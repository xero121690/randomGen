function getRandom(min, max) {
  var random = Math.random() * (max-min) + min;
   return Math.floor(random);
}

function getRandomIncl(min, max) {
  return getRandom(min, max + 1);
}
var storage = {};
var x = 10000;
var min = -3;
var max = 4;
var total = 0;
for(var i = 0; i < x; i++) {
  var randomNum = getRandomIncl(min, max);
  if (storage[randomNum] >= 1){
    storage[randomNum]++;
  } else {
    storage[randomNum] = 1;
  }
  total++;
}

for (var i = min - 1; i <= max + 1 ; i++){
  if (storage[i] != null){
    console.log((i) + ': ' + ((storage[i]/total) * 100 ).toPrecision(3) + '%');
  }
}