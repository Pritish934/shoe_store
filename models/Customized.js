import mongoose from 'mongoose';
const { Schema } = mongoose;

const CustomizedSchema = new Schema({
  title:{type: String, required:true},
  slug:{type: String, required: true, unique:true},
  desc:{type: String, required: true},
  img:{type: String, required: true},
  category:{type: String, required: true},
  size:{type: String},
  brand:{type: String},
  color:{type:String},
  price: {type: Number, required: true},
  availableQty: {type: Number, required: true},
  
}, {timestamps:true});
mongoose.models = {}
export default mongoose.model('Product',CustomizedSchema)