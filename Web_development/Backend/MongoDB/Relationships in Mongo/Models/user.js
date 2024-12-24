const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/MongoRelations')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//one to few relation schema
//we store them as an embedded document in an array
const userSchema=new Schema({
    username:String,
    addresses:[{
        // _id:false, if you want to ensure that no id needs to be created for any document inside a document you can keep it to false
        location:String,
        country:String
    }]
});

const User=mongoose.model("User",userSchema);

const addUsers=async()=>
{
    let user1=new User
    ({
        username:"Sameer",
        addresses:[{
            location:"Hyderabad, Telangana",
            country:"India",
        }]
    });
    user1.addresses.push({location:"Vizianagaram, Andhra Pradesh",country:"India"});

    await user1.save()
    .then(()=>console.log(user1))
    .catch((e)=>console.log(e));
}
addUsers();
//one to few means 2 to 900

