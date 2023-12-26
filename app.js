const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT
const {routerSpent} = require('./routes/routeSpent');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({msg:"Welcome to API of Control of Family Expenses"})
})

app.use('/routerSpent', routerSpent);

app.listen(PORT, ()=>{
    console.log('Server running!')
})