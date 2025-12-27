import student from "../models/studentsModels.js";

const getStudentsDetails = async(req, res) => {
    try{
        const mydata = await student.find();
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
const getStudentById = async (req, res) => {
    try{
        const id = req.params.userid;
        console.log("id :", id)
        const data = await student.findById({_id: id});
        console.log(data);
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
// This is for testing 👀⁉️
const getStudentsDetailsWithFilters = async(req, res) => {
    try{
        const {stdBranch, stdCollege, stdCgpa} = req.query;
        console.log("stdBranch :", stdBranch);
        console.log("stdCollege :", stdCollege);
        console.log("stdCgpa :", stdCgpa);
        res.status(200).json("success");
    }catch(error){
        res.status(500).json({error: error.message})
    }

}
export {getStudentsDetails, addStudents, getStudentById, getStudentsDetailsWithFilters};
