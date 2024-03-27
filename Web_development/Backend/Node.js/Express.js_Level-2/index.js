const express=require('express');
const app = express();
console.dir(app);
let port =8080;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});