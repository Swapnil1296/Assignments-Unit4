const express = require("express");

// console.log(express)

const app = express();
// console.log(app)

app.listen(5500, () => {
  console.log("hello");
});

app.get("/books", function (req, res) {
  res.send({
    title1: "the alchemist",
    title2: "who killed gandhi",
    title3: "in presuit of happiness",
    title4: "my experience with trueth",
  });
  // console.log("hello");
});
