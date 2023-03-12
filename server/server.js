const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const port = process.env.PORT || '8000';

var bcrypt = require('bcrypt');
const saltRounds = 11;

require('dotenv').config();
app.use(cors());
app.use(express.json());

try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      console.log(" Mongoose is connected")
    );
  
  } catch (e) {
    console.log("could not connect");
    console.log(e)
  }

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const ConsumerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: String,
      required: true,
    },
    diet:{
        type:String,
        required:true,
    }
    ,location:{  
        type:String,
        required:true,

    },
    lactoseIntolerent:{ 
        type:String,
        required:true,

    },
    allergy:{
        type:String,
        required:true
    }
  });
  
  const consumerModel = mongoose.model("Consumer", ConsumerSchema);
  
  app.post('/signup',(req, res) => {

    console.log(req.body);

    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
  
      var userDetails = new consumerModel({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        mobile_no: req.body.mobile_no,
        messName:req.body.messName,
        diet:req.body.diet,
        lactoseIntolerent:req.body.lactoseIntolerent,
        allergy:req.body.allergy,
        location:req.body.location
      });
       
      userDetails .save(
            // if (!err)
            //     console.log("user added successfully");
            // else
            //     console.log('Error during record insertion : ' + err);
      );
  
    });
     
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})