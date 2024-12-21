require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const CMC_API_KEY = process.env.5b5e4fee-c9df-437d-bdb2-7114013d5291

;

app.get('/index', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'Accepts': 'application/json',
                'X-CMC_PRO_API_KEY': "5b5e4fee-c9df-437d-bdb2-7114013d5291"


            }
        });

        const data = response.data;
        let htmlResponse = '<html><body>';
        data.data.forEach(currency => {
            htmlResponse += `<h2>${currency.name} (${currency.symbol})</h2>`;
            htmlResponse += `<p>Price: $${currency.quote.USD.price}</p>`;
        });
        htmlResponse += '</body></html>';

        res.send(htmlResponse);
    } catch (error) {
        res.status(500).send('Error fetching data from CoinMarketCap API');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
});
