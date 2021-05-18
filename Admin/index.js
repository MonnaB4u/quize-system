const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_pass}@cluster0.dyvn0.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors());
const port = 5000





const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {

    const onlineQuozeDbcollection = client.db("onlineQuozeDb").collection("AllQuestion");
    const FeedBack = client.db("onlineQuozeDb").collection("FeedBack");

    console.log("Db Connected")

////////add all Quize

app.post('/addallquiz',(req,res)=>{
    const quize=req.body;
    onlineQuozeDbcollection.insertMany(quize)
    .then(result =>{
        console.log(result.insertedCount);
        res.send(result.insertedCount)
    })
})

 app.get('/quizeAll',(req,res)=>{
    onlineQuozeDbcollection.find({}).limit(16)
   .toArray((err,documents)=>{
       res.send(documents)
   })
 })

 ////FeedBack
 app.post('/addallfeedback',(req,res)=>{
    const feed=req.body;
    FeedBack.insertOne(feed)
    .then(result =>{
        console.log(result.insertedCount);
        res.send(result.insertedCount)
    })
})

 app.get('/allfeedback',(req,res)=>{
    FeedBack.find({})
   .toArray((err,documents)=>{
       res.send(documents)
   })
 })

//  app.get('/allfeedback', (req, res) => {

//     // const customers=req.body;
//     CustomerCollection.find({}).limit(1)
//     .toArray((err, documents) => {
//         res.send(documents)
//     })
// })

 ///Update Quize

//  app.post('/addallquiz',(req,res)=>{
//     const quize=req.body;
//     onlineQuozeDbcollection.insertMany(quize)
//     .then(result =>{
//         console.log(result.insertedCount);
//         res.send(result.insertedCount)
//     })
// })

//  app.get('/quizeAll',(req,res)=>{
//     onlineQuozeDbcollection.find({}).limit(16)
//    .toArray((err,documents)=>{
//        res.send(documents)
//    })
//  })

  
});


app.listen(port)