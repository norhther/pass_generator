const express = require("express");
const path = require("path")
const helmet = require("helmet")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})


