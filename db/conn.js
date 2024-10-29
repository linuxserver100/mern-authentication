const mongoose = require("mongoose");
process.env.DB="mongodb+srv://lalriteuster2"


mongoose.connect(process.env.DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})
