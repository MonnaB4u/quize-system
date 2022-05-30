const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_Password}@cluster0.doolq.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors())
const port =process.env.PORT ||  5000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

console.log(process.env.DB_user + process.env.DB_Password + process.env.DB_Name)


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("onlineQuozeDb");
        const onlineQuozeDbcollection   = database.collection("AllQuestion");;


        // create a document to insert


        /// Add New User

        app.post('/addQuiz', async (req, res) => {
            const newData = req.body
            const result = await onlineQuozeDbcollection.insertOne(newData
            );
            console.log('New user found', req.body)
            console.log('New user added', result)
            res.json(result)
        })


        //////// Get All Project and Display

        app.get('/onlineQuozeDbcollection ', async (req, res) => {
            const cursor = onlineQuozeDbcollection .find({});
            const user = await cursor.toArray();
            res.send(user);
        })


        ///// Delete One Project
        app.delete('/onlineQuozeDbcollection /:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await onlineQuozeDbcollection.deleteOne(query);
            console.log('delete user', result)
            res.json(result)
        })

        //////get Spacific user by ID

        // app.get('/onlineQuozeDbcollection /:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     users= await onlineQuozeDbcollection.findOne(query);
        //     res.send(users)
        // })



    } finally {
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log("Local Host", port)
})

