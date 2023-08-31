const express = require("express");                                     //Connection XAMPP to MySQL
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"     //change
})

app.get("/",(req, res) => {
    const sql = "SELECT * FROM familytree";
    db.query(sql, (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO familytree (`FullName`, `Age`, `Gender`, `Relationship`) VALUES (?)";
    const values = [
        req.body.fullName,
        req.body.age,
        req.body.gender,
        req.body.relationship
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "update familytree set 'FullName' = ?, 'Age' = ?, 'Gender' = ? , 'Relationship' = ? where ID = ?";
    const values = [
        req.body.fullName,
        req.body.age,
        req.body.gender,
        req.body.relationship
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(5000,()=> {   //change
    console.log("Read...");
})