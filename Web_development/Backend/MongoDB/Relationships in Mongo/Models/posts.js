const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/MongoRelations')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//one to squillions (millions or billions) in detail
const userSchema=new Schema({
    name:String,
    email:String
})

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:
    {
        type:Schema.Types.ObjectId,
        ref:"InstaUser"
    }
});

const InstaUser=mongoose.model("InstaUser",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async()=>{
    let user1=new InstaUser({
        name:"John",
        email:"john@gmail.com"
    })

    let post1=new Post({
        content:"Hi everyone",
        likes:29,
    })

    // await user1.save();
    post1.user=user1._id;
    await post1.save();
}

// addData();

const showData=async()=>{
    let result=await Post.find({}).populate("user","user");
    console.log(result);
}

showData();

console.log("show users with posts")
//To show posts related to a user
const showUsersWithPosts = async () => {
    const result = await InstaUser.find({user:"John"}).populate('posts').exec();
    console.log(result);
};

showUsersWithPosts();