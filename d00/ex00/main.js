const readline = require('readline-sync');

// var myMegaphone = function (res) {
function myMegaphone(res) {
  if (res != '') {
    return res.toUpperCase();
  } else {
    return res = "LOUD AND UNBEARABLE FEEDBACK NOISE";
  }    
}

var response = readline.question("Enter some text: ");

response = myMegaphone(response);
myMegaphone(response);

console.log(response);

module.exports.myMegaphone = myMegaphone;