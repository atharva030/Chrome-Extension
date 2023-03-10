const express=require('express')
var cors=require('cors')
const mongoose=require('mongoose');
require('dotenv').config()
const mongoURI="mongodb+srv://atharva_27:Pankhuri@cluster0.bhyubjd.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const port = 5000 
const connectionParams={
  useNewUrlParser:true,
  useUnifiedTopology:true
}
app.use(cors())
app.use(express.json());
//Available Routes
app.use('/',require('./routes/auth'))
mongoose.set("strictQuery", false);
mongoose.connect(mongoURI,connectionParams).then(()=>{
    console.info("connected")
}).catch((error)=>{
    console.log("Error: ",error)
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})