var express = require('express');
var bodyParser = require('body-parser');
const { resolveNaptr } = require('dns');
var app = express();

app.use(bodyParser.urlencoded({ extended : false}));

app.post('/message', function(req, rec){
if(req.body.Body.toUpperCase() === 'STOP')
{
    res.send(
        `
        <Response> 
            <Message>
            Hello input name.  You will no longer recieve texts.
            </Message>
            
            </Response>
        `
    )
}
});

app.listen(3000); //whatever port we wanna listen to