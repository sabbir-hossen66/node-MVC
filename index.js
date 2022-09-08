const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// app.use('/user', require('./Router/userRouter'))


// app.get('/', (req, res) => {
//     res.send('Welcome to ExpressJS Project server ')
// })


app.listen(PORT, () => { console.log(`MVC is running ${PORT}`); })