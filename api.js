const app = require('express')();
const PORT = 8254;

app.listen(
    PORT,
    () => console.log('I made this work on http://localhost:${PORT}')
);
