const express = require('express');

const app = express();
const port = 3101;
const distPath = '/Users/raylin/Documents/Personal_Project/daily_todo/dist';

app.use(express.static(distPath));

app.listen(port, () => console.log(`listening on port: ${port}`));
