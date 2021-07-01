const config = require('./config.json')
const fetch  = require('node-fetch')
const express = require('express');
const app = express();

const CALLBACK_URI = 'https://localhost/auth/linkedin/callback'

const getParams = '?grant_type=client_credentials&client_id='+config.CLIENT_ID+'&redirect_uri='+CALLBACK_URI
    +'&response_type=code&scope=r_emailaddress'
app.get('/', (req, res) => {
    //res.end ('Hello World')
    fetch('https://www.linkedin.com/oauth/v2/authorization'+getParams).then(resp => {
        resp.text().then(result => res.write(result))
    })
})

app.listen(3000, () => {
    console.log('Litening on port 3000...')
})