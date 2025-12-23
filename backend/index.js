const express = require("express");
const dbConfig = require("./config/db");
const app = express();

dbConfig();

app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log(`Server is live on PORT 5000`);
});
