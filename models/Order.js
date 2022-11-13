import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId:  {type:String, required:true}, // String is shorthand for {type: String}
  products: [
    {
        productId:{type: String, required:true},
        quantity:{type: Number, default: 1}
    }
  ],
  address:{type: String, required: true},
  amount: {type: Number, required: true},
  status: {type: String, default: 'pending', required:true}
}, {timestamps:true});
mongoose.models = {}

export default mongoose.model('Order',OrderSchema)