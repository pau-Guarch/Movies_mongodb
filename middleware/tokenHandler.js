import jwt from 'jsonwebtoken';
import HttpError from "http-errors";
import messagesapp from "../data/messages.js";


const decode = (req, res, next)=>{
    console.log("Dentro de decode---------")
    const secretWord = process.env.TOKENWORD;
    const tokeninput = req.headers['authorization'];
    tokeninput = tokeninput.substring(7, authHeader.length);
    console.log(tokeninput);
    let decoded = jwt.verify(tokeninput, secretWord);
    console.log("Step2---------")

    // let decoded = jwt.verify(req.body.token, 'holapaola');

    if(!decoded){
        next(HttpError(400, { message: messagesapp.invalid_token }))    
    }else{
        req.body.token=decoded;
        console.log("----------Token decoded-----------")
        next();
    }
    
}

export default{
    decode
}