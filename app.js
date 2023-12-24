const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT

app.get('/',(req,res)=>{
    res.status(200).json({msg:"Welcome to API of Control of Family Expenses"})
})

app.listen(PORT, ()=>{
    console.log('Server running!')
})