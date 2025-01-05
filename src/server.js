const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");

const api = require("./routes");
const { initSocket } = require("./utils/socketIO");

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

initSocket(server);

app.use("/api", api);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
