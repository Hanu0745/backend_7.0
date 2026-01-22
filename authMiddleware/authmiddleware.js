
import jwt from "jsonwebtoken";

const authrization = (req, res, next) => {
  const authheader = req.headers["authorization"];
  console.log(authheader);
  const token = authheader && authheader.split(" ")[1];

  if (!token) return res.sendStatus(401);
  console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export {authrization};