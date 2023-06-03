// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://localhost:27017/newDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    price:String,
    image:String,
    description:String,
    time:Date
})

// สร้างโมเดล
let Product = mongoose.model("products",productSchema)

// ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
    model.save(data)
}