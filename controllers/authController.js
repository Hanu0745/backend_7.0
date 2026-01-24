
import userschema from "../models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
const registerUser = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body;
        const userexisted = await userschema.findOne({ userEmail });

        if (userexisted) { return res.status(400).send("user existed") };

        const hashPass = await bcrypt.hash(userPassword, 10);

        const newuser = {
            userName: userName,
            userEmail: userEmail,
            userPassword: hashPass
        };

        const createuser = await userschema.create(newuser);
        res.status(201).send({ user: createuser, message: "user added" });
    } catch (error) {
        res.status(500).send("internal server error");
    }
};

// user login
const userLogin = async (req, res) => {
    const { userEmail, userPassword } = req.body;
    console.log(req.body);
    try {
        const finduser = await userschema.findOne({ userEmail });
        console.log("find user : ", finduser);
        if (!finduser) return res.status(404).send("user not found");

        const checkpass = await bcrypt.compare(userPassword, finduser.userPassword);
        console.log("check pass : ", checkpass);
        if (!checkpass) return res.status(401).send("password not matched");
        console.log(process.env.JWT_SECRET);
        //generate jwt
        const jwtoken = jwt.sign({ userName: userEmail }, process.env.JWT_SECRET, { expiresIn: '5m' });
        console.log("token : ", jwtoken);

        // set cookie
        res.cookie('token', jwtoken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 60 * 1000 * 5 // 5 minutes
        })
        return res.status(200).json("login successful");

    } catch (error) {
        res.status(500).send("internal server error");
    }
};

// get user profile (test protected route)
const getProfile = async (req, res) => {
    try {
        console.log(req.user);
        return res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send("internal server error");
    }
};

// logout user
const userLogout = async (req, res) => {
    try {
        console.log("logout user called");
        // clear cookie
        res.clearCookie('token');
        return res.status(200).send("user logged out");
    } catch (error) {
        res.status(500).send("internal server error");
    }
};

export { registerUser, userLogin, getProfile, userLogout };