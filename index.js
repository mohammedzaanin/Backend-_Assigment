const express = require('express')
const app = express()
app.use(express.json())
const port = 5500

app.post('/data', function (req, res) {
    let obj_data = req.body;
    obj_data.name = "Mohammed_Alzaanin"
    res.json(obj_data)
})

app.get('/greeting/:name', (req, res) => {
    let name = req.params.name;
    let obj_data = {};
    obj_data.message = `Hello ${name}`;
    res.json(obj_data)
})

app.listen(port, () => {
    console.log(`server runing at port:${port}`)
})
