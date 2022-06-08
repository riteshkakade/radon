const { count } = require("console")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")


// Creating Author Schema: 

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

//Problem Statement 2:

const getAuthorsData= async function (req, res) {
    let savedData = await authorModel.find({authorName: "Chetan Bhagat"}).select("authorId")
    let bookdata = await bookModel.find({authorId: savedData[0].authorId})
    res.send({msg: bookdata})
}




module.exports.createAuthor= createAuthor

module.exports.getAuthorsData= getAuthorsData