const app  = require("./App");
const dotenv = require("dotenv")
const Loaders = require("./Loaders/index");

dotenv.config();
Loaders.start();

const PORT =   process.env.PORT;

app.listen(PORT, () => console.log("Servidor Rodando"))
