const app = require('./app');
const Loaders = require('./Loaders');

Loaders.start();

// app.listen(3333, () => console.log("Servidor esta rodando"));

app.listen(3333, () => { return true} );


