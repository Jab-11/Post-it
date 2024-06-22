const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./db/connectDB");

dotenv.config({
    path: "./.env",
});

connectDB()
    .then(() => {
        app.listen(8080, () => {
            console.log("Server is running at port 3000");
        });
    })
    .catch((error) => {
        console.log("MONGODB CONNECTION FAILED", error);
    });
