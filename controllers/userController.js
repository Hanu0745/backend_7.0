
import User from "../models/userModel.js";

// add user controller
const addUser = async (req, res) => {
    try {
        const bodyData = req.body;
        console.log(bodyData);
        const userimage = req.file ? req.file.path : null;
        console.log("userimage :", userimage);
        const userdata = {
            username: bodyData.username,
            email: bodyData.email,
            password: bodyData.password,
            userimage: userimage,
        }
        const addedData = await User.create(userdata);
        return res.status(200).json(addedData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

export { addUser };