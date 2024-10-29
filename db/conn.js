const mongoose = require("mongoose");
process.env.DB="mongodb+srv://lalshay1712:AqeQW34FHRE@cluster2.tidgl1i.mongodb.net/cluster2-1?retryWrites=true&w=majority&appName=Cluster2"


mongoose.connect(process.env.DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})
