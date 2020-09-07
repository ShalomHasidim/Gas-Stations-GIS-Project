const express = require("express");
const app = express();

require("./startup/cors")(app);
require("./startup/db");
require("./startup/routes")(app);


app.listen(3900, () =>
  console.log(`Listening on port 3900...`)
);