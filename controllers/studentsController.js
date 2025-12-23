import student from "../models/studentsModels.js";

const getStudentsDetails = (req, res) => {
    const mydata = {name: "thub", roll: "1234"}; //db
    res.send(mydata);
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
