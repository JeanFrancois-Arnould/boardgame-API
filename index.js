require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 4040;

const expressSwagger = require('express-swagger-generator')(app);

let options = require('./swagger-config.json');
options.basedir = __dirname; // __dirname désigne le dossier du point d'entrée
options.swaggerDefinition.host = `localhost:${port}`;

expressSwagger(options);

const router = require('./app/router');

// ce MW informe notre app qu'on communiquera avec elle en JSON
// il transforme le payload de toutes les requêtes (qui n'est qu'une string à la base)
// en un objet utilisable dans les MW suivants, via request.body
app.use(express.json());

app.use('/api', router);

app.listen(port, () => console.log(`Listening on ${port}`));