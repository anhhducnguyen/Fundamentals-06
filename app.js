const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const bookRoutes = require('./src/routes/books.routes');
const categoriesRoutes = require('./src/routes/categories.routes');
const reviewRoutes = require('./src/routes/reviews.routes');

app.use(bodyParser.json());

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/reviews', reviewRoutes);


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API!'
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})