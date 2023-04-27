const express = require("express")
const tf = require('@tensorflow/tfjs');

const tensor = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
const respuesta = tensor.toString()

const app = express()

app.get("/", (req,res)=>{

res.send({respuesta})
})

app.listen(3000, console.log("tensor iniciado"))