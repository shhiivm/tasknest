const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
dbConfig();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1", require("./routes/task"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is live on PORT ${PORT}`);
});
