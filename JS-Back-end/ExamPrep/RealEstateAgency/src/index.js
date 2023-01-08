const { PORT, DB_CONNECTION_STRING } = require('./constants');
const app = require('express')();
const router = require('./router');
const dbConfig = require('./config/db-config')


require('./config/hbs-config')(app);
require('./config/express-config')(app);

app.use(router);

dbConfig(DB_CONNECTION_STRING)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening on: http://localhost:${PORT}`);
        });
    }).catch(err => {
        // throw { message: 'DB connection error! ' + err }
    });