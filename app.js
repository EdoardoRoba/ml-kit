const express = require('express')
const path = require('path');
var cors = require('cors')

const app = express();
const feUrl = "http://localhost:5000"
// const feUrl = "https://my-warehouse-app-heroku.herokuapp.com"
const port = process.env.PORT || 8085
// const idEmailAlert = '62086ab09422a5466157fe5a'

// COMMENT WHEN RUNNING LOCALLY
// app.use(express.static(path.join(__dirname, "/frontend/build")));
// app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
})
// app.use(bodyParser.json())

// COMMENT WHEN BUILDING TO HEROKU next 13 lines
const whitelist = [feUrl]
// enable CORS policy
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))


app.get('/sayHello', (req, res) => {
    res.send("hello world!");
})
