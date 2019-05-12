// Writing and Reading the Best Thing Ever file

var fs = require("fs");

fs.readFile("Unsolved/best_things_ever.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }

  console.log(data);

  var dataArr = data.split(",");

  console.log(dataArr);
});
