const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT
const { routerSpent } = require('./routes/routeSpent');
const { routerResponsible } = require('./routes/routeResponsible');
const { routerTypeOfExpense } = require('./routes/routeTypeOfExpense');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to API of Control of Family Expenses" })
})

app.use('/routerSpent', routerSpent);

app.use('/routerResponsible', routerResponsible);

app.use('/routerTypeOfExpense', routerTypeOfExpense);

app.listen(PORT, () => {
    console.log('Server running!')
})