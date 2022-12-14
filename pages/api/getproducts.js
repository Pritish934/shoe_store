// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/mongoose"
import Product from "../../models/Product"

const handler = async (req,res)=>{
    let products = await Product.find()
    let shoes = {}
    for(let item of products){
        if(item.title in shoes){
            if(!shoes[item.title].color.includes(item.color) && item.availableQty > 0){
                shoes[item.title].color.push(item.color)
            }
            if(!shoes[item.title].size.includes(item.size) && item.availableQty > 0){
                shoes[item.title].size.push(item.size)
            }
            
        }
        else{
            shoes[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0){
                shoes[item.title].color = [item.color]
                shoes[item.title].size = [item.size]
            }
        }
    }
    res.status(200).json({products:shoes})
}
export default connectDB(handler)