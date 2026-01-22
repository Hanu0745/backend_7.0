
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true,
    }
});

const userschema = mongoose.model('newuser', userSchema);
export default userschema;