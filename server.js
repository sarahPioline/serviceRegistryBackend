const express = require('express');

const { api } = require('./api');

app = express();

app.use('/api', api);

// app.get('/', (req, res) => {
//   res.render('index', { title: 'Bonjour !' });
// });

app.listen(4000, () => {
    console.log('Server is ready on :4000 !');
});