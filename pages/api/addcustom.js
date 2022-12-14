import connectDB from "../../middleware/mongoose"
import Customized from "../../models/Customized"

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        for (let i = 0; i < req.body.length; i++) {
            const p = new Customized({
                title:req.body[i].title,
                slug:req.body[i].slug,
                desc:req.body[i].desc,
                img:req.body[i].img,
                category:req.body[i].category,
                size:req.body[i].size,
                brand:req.body[i].brand,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty
            })
            await p.save()
        }
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
    
}
export default connectDB(handler)