var Request = require("request");

Request.get("https://api.coindesk.com/v1/bpi/currentprice.json", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});