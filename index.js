// console.log("Backend Starts");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send("Gurdeep18")
})

app.get('/login', (req,res) => {
    res.send(' <h1> Gurdeep kumar </h1>')
})


// app.get('/login', (req, res) => {
//     res.send(`
//       <html>
//         <head>
//           <style>
//             h1 {
//               color: blue;
//               text-align: center;
//             }
//             body {
//               background-color: black;
//               font-family: Arial, sans-serif;
//             }
//           </style>
//         </head>
//         <body>
//           <h1>Gurdeep Kumar</h1>
//         </body>
//       </html>
//     `);
//   });
  

 app.get('/youtube', (req,res) => {
    res.send(' <h2> Welcome to Youtube </h2>')
}) 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

