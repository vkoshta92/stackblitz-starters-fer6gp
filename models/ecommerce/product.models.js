import mongoose from 'mongoose';

const prductschema = new mongoose.Schema(
  {
    description: {
      type: String,
      requred: true,
    },

    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },

    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category",
      required:true
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
    // image video buffer value
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', prductschema);
