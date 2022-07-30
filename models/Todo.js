import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Todo', schema)