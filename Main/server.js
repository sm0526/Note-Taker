const express = require('express');
const routes = require('./routes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', routes);



app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));