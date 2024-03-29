const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT
const { routerSpent } = require('./routes/routeSpent');
const { routerResponsible } = require('./routes/routeResponsible');
const { routerTypeOfExpense } = require('./routes/routeTypeOfExpense');
const { routerEstablishment } = require('./routes/routeEstablishment');
const { routerRevenue } = require('./routes/routeRevenue');
const { routerTypeOfRevenue } = require('./routes/routeTypeOfRevenue');
const { routerFinalBalancePerPeriod } = require('./routes/routeFinalBalancePerPeriod');
const { routerSpentPerResponsiblPerPeriod } = require('./routes/routeSpentPerResponsiblePerPeriod');
const { routerRevenuePerResponsiblePerPeriod } = require('./routes/routeRevenuePerResponsiblePerPeriod');
const { routerFinalBalancePerMonth } = require('./routes/routeFinalBalancePerMonth');
const { routerSpentPerResponsiblePerMonth } = require('./routes/routeSpentPerResponsiblePerMonthController');
const { routerRevenuePerResponsiblePerMonth } = require('./routes/routeRevenuePerResponsiblePerMonth');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const { root } = require('./controllers/rootController');

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(express.json());

app.get('/', root
    // #swagger.name = 'root'
    // #swagger.description = 'Welcome.'
    //#swagger.tags = ['Root']
);

app.use('/routerFinalBalancePerPeriod', routerFinalBalancePerPeriod);

app.use('/routerSpent', routerSpent);

app.use('/routerResponsible', routerResponsible);

app.use('/routerTypeOfExpense', routerTypeOfExpense);

app.use('/routerEstablishment', routerEstablishment);

app.use('/routerRevenue', routerRevenue);

app.use('/routerTypeOfRevenue', routerTypeOfRevenue);

app.use('/routerSpentPerResponsiblePerPeriod', routerSpentPerResponsiblPerPeriod);

app.use('/routerRevenuePerResponsiblePerPeriod', routerRevenuePerResponsiblePerPeriod);

app.use('/routerFinalBalancePerMonth', routerFinalBalancePerMonth);

app.use('/routerSpentPerResponsiblePerMonth', routerSpentPerResponsiblePerMonth);

app.use('/routerRevenuePerResponsiblePerMonth', routerRevenuePerResponsiblePerMonth);

app.listen(PORT, () => {
    console.log('Server running!')
})