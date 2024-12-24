const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/MongoRelations')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//one to many
//store a reference of child inside parent or a pointer to the data for retreival when necessary
const orderSchema=new Schema({
    item:String,
    price:Number,
});


const Order=mongoose.model("Order",orderSchema);

// async function addOrders()
// {
//     await Order.insertMany([
//         {item:"Bingo",price:10},
//         {item:"Lays",price:20},
//         {item:"Doritos",price:15},
//         {item:"Haldirams",price:5},
//         {item:"Pringles",price:40},
//         {item:"Coke",price:30}
//     ]).then(()=>console.log("Insertion completed")).catch((e)=>console.log(e));
// }

const customerSchema=new Schema({
    name:String,
    orders:[{
        type:Schema.Types.ObjectId,//it refers to the object id of the document
        ref:"Order"//it refers to the collection we are connecting to
    }]
});

const Customer=mongoose.model("Customer",customerSchema);

const addCustomer=async()=>{
    let cust1=new Customer({
        name:"Sameer"
    });
    //method1 to store the whole document inside the array by finding it
    let order1=await Order.findOne({item:"Lays"});
    let order2=await Order.findOne({item:"Coke"});
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let res=await cust1.save();
    console.log(res);
    //Even though we are pushing them as documnets the refences of the documents would only be stpred  inside array
    // {
    //     _id: new ObjectId('66aa50b60b686184f16cceeb'),
    //     name: 'Sameer',
    //     orders: [
    //       new ObjectId('66aa4dd250ec996f78eedbe7'),
    //       new ObjectId('66aa4dd250ec996f78eedbeb')
    //     ],
    //     __v: 0
    //  }
}

const findCustomers=async()=>{
    let customer = await Customer.findOne({ name: "Sameer" }).populate('orders');
    console.log(customer);
}
//we use populate method to extract references
findCustomers();