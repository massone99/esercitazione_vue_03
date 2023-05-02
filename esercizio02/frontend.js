const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');

const indexRouter = require('./src/routes/indexRoutes');

global.appRoot = path.resolve(__dirname);

const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log("connected to db")).catch((e) => console.log(e));

app.use(cors());
// Se apro l'html da WebStorm non usa questo codice, quindi l'indirizzo e la porta vanno scritti manualmente
app.use('/static', express.static(path.join(__dirname, 'public')));

//Per gestire i parametri passati nel corpo della richiesta http.

app.use(express.json());
app.use(indexRouter);

app.use((req, res) => {
    // Per qualsiasi richiesta devo restituire l'index,
    // sarà poi Vue a gestire il routing.
    // Senza il caricamento del codice html, Vue non può operare il routing su ogni richiesta.
    res.sendFile(path.join(appRoot, 'www','index.html'))
});

app.listen(PORT, () => {
    console.log('Node API server started on port ' + PORT);
});
