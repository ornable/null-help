const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dbUrl = 'mongodb://localhost:27017/yelp-camp'

const TestSchema = new Schema({
  title: String,
  test: Number,
})

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
    console.log('Database connected with mongoose')
}

app.use(cors())
app.use(express.json())

app.get('/test', async (req, res) => {
  const obj = {
    title: 'thisisatitle',
    test: 2
  }
  const test = mongoose.model('Test', TestSchema)
  const newTest = new test(obj)
  await newTest.save()

  res.send(obj)
})

app.post('/retrieve', async (req, res) => {
  const Test = mongoose.model('Test', TestSchema)
  const test = await Test.findOne(req.body)
  console.log(test)
  res.send(test)
})

const port = 3000
app.listen(port, () => {
  console.log("listening to port")
})