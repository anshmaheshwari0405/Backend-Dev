// const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("File not found");
//     return;
//   }
//   console.log(data);
// });
const fs = require("fs");

fs.writeFile("data.txt", "Node.js write success", (err) => {
  if (err) {
    console.log("Write failed");
    return;
  }

  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Read failed");
      return;
    }
    console.log(data);
  });
});
