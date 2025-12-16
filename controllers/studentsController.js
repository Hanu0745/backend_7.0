
const getStudentsDetails = (req, res) => {
    const mydata = {name: "thub", roll: "1234"}; //db
    res.send(mydata);
};
const addStudents = (req, res) => {
    const data = req.body;
    console.log(data);
    //logi to add data into db
    res.send("data added");
};
export {getStudentsDetails, addStudents};
