const pa11y = require('pa11y')
const express = require('express');
const app = express();
const Port = process.env.PORT || 8000;

app.use(express.static('public'))

app.get('/api/test',async (req,res) => {
    if(!req.query.url) {
        res.status(400).json({error : 'url is required'})
    } else {
        const results = await pa11y(req.query.url);
        res.status(200).json(results);
    }
})

app.listen(Port, () => {
    console.log(`Up and running on ${Port}`)
})
