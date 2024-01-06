const express = require('express');
const app = express();

const router = require('./routes/router')

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

// app.use(urlencoded({ extended: false }));
// app.use(json());

const port = process.env.PORT || 3000;

try {
    app.listen(port, () => {
        console.log("server in port," + port);
    });
    
} catch (error) {
    console.log(error);
}


module.exports = {
    app,
};