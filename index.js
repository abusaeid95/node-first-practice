const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const users=[
    {id:0, name:"Faiha", Phone:"01754232695", email:"Faiha@gmail.com" },
    {id:1, name:"Sumana", Phone:"01754235632", email:"Sumana@gmail.com" },
    {id:2, name:"Andraw", Phone:"01754239587", email:"Andraw@gmail.com" },
    {id:3, name:"Daniel", Phone:"01754233285", email:"Daniel@gmail.com" },
    {id:4, name:"Chris", Phone:"01754232396", email:"Chris@gmail.com" },
    {id:5, name:"Steffani", Phone:"01754233695", email:"Steffani@gmail.com" },
    {id:6, name:"Brain", Phone:"01754232397", email:"Brain@gmail.com" },
    {id:7, name:"Brandon", Phone:"01754231247", email:"Brandon@gmail.com" },
    {id:8, name:"Mark", Phone:"01754239936", email:"Mark@gmail.com" },
    {id:9, name:"Jack", Phone:"01754234788", email:"Jack@gmail.com" }
]



app.get('/users', (req, res)=>{
const search = req.query.search;
if(search){
    const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search))
    res.send(searchResult)
}
else{
    res.send(users)
}
})
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)

})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('Example app listennning', port)
  })