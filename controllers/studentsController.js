
const getStudents = (req, res) => {
    //get data from db
    let stdData = {name: "aditya", roll: "1234"};
    res.status(200).json({data: stdData});
};

const addStudents = (req, res) => {
    //add data
    res.status(201).json({message: "data added"});
}

export {getStudents, addStudents};
