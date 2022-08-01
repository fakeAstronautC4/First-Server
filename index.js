const express = require("express"); //Import the express package into index.js file
const cors = require("cors"); //Import the cors package into index.js file

const app = express();  
app.use(express.json()); // config express to use JSON objects 
app.use(cors()); //allow express app to use cors functionality (MIDDLEWARE)

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends);
});
app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(4000, () => console.log("Server running on port 4000")); // Setting the server to run on port 4000
