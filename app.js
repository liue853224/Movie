// 定義
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

// 設置
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));

// 路由
app.get("/", (req, res) => {
  res.redirect("/movies");
});

app.get("/movies", (req, res) => {
  res.render("index");
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  res.send(`read movie:${id}`);
});
// Listening
app.listen(port, () => {
  console.log(`express server is running on http://localhost${port}`);
});
