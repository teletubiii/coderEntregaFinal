const express = require("express");
const router = require("./router")
//const cartsRouter = require("./cart/router")


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", router)

app.listen(8080, () => {
    console.log("server up")
})
