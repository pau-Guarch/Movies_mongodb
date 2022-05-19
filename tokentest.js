import jwt from 'jsonwebtoken';
import express from 'express';

const privateKey = 'holapaola'; 
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFxdWFtYW5AZG9taW5pby5lcyIsImlhdCI6MTY1MDMwNzg1Nn0.Iir97fs4DprIraGhbor76Cuz2eiF3Yj29i7dnzFArAE";
// let token = jwt.sign({ username: 'aquaman@dominio.es' }, privateKey, { algorithm: 'HS256'});
console.log(token);



let decoded = jwt.verify(token, 'holapaola');
console.log('-----');
console.log(decoded);