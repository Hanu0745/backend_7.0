import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    stdName: {
        type: String
    },
    stdRoll : {
        type: String
    },
    stdPhone: {
        type : Number
    },
    status:{
        type : Boolean,
        default: false
    }
});
const student = mongoose.model("student", studentSchema);
export default student;
