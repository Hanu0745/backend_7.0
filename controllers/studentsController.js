import student from "../models/studentsModels.js";

const getStudentsDetails = async(req, res) => {
    try{
            // const mydata = await student.find();
            // const mydata = await student.findOne();
            const mydata = await student.findById({_id: "694b80caf0cee6258678668e"})
            res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data);
    const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
export {getStudentsDetails, addStudents};
