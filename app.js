const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form on the root route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Submit Score</title>
    </head>
    <body>
        <h1>Submit Score to Wordwall</h1>
        <form method="POST" action="/submit">
            <label for="score">Score:</label>
            <input type="number" id="score" name="score" required><br><br>

            <label for="time">Time:</label>
            <input type="number" id="time" name="time" required><br><br>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="activityId">Activity ID:</label>
            <input type="text" id="activityId" name="activityId" required><br><br>

            <label for="templateId">Template ID:</label>
            <input type="text" id="templateId" name="templateId" required><br><br>

            <button type="submit">Submit</button>
        </form>
    </body>
    </html>
    `);
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const { score, time, name, activityId, templateId } = req.body;

    try {
        const response = await axios.post('https://wordwall.net/leaderboardajax/addentry', null, {
            headers: {
                "authority": "wordwall.net",
                "method": "POST",
                "path": "/leaderboardajax/addentry",
                "scheme": "https",
                "accept": "*/*",
                "accept-encoding": "gzip, deflate, br, zstd",
                "accept-language": "ru-RU,ru;q=0.9",
                "dnt": "1",
                "origin": "https://wordwall.net",
                "priority": "u=1, i",
                "referer": "https://wordwall.net/ru/resource/8379545/%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B8%D0%B5",
                "sec-ch-ua": "\"Not;A=Brand\";v=\"24\", \"Chromium\";v=\"128\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "x-wordwall-version": "1.0.9175.18113",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
            },
            params: {
                score,
                time,
                name,
                mode: 1, // Assuming mode is always 1
                activityId,
                templateId
            }
        });

        res.send(`Response from Wordwall: ${response.data}`);
    } catch (error) {
        res.send(`Error: ${error.message}`);
    }
});
