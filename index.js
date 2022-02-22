const express = require("express");
const { process_params } = require("express/lib/router");
const app = express();

app.get("/", (req, res) => {
  res.send("very beginning of a project");
});
// create a port
const port = process.env.PORT || 5010;
app.listen(port);
// localhost:5010
