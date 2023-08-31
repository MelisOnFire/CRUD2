import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateBtn() {

    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [relationship, setRelationship] = useState('')
    const {id} = useParams();

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
         
        axios.put('http://localhost:5000/update/'+id, {fullName, age, gender, relationship})
        .then(res => {
            console.log(res);
            navigate('/')
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-2'>

                <form onSubmit={handleSubmit}>
                    <h2>Update your Family Member</h2>
                    <Button className='btn btn-success' type='submit'>Update</Button>
                    <div className='mb-2'>
                        <label htmlFor="">FullName</label>
                        <input type="text" placeholder='Enter your FullName' className='form-control'
                        onChange={e => setFullName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter your Age' className='form-control' 
                        onChange={e => setAge(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Gender</label>
                        <input type="text" placeholder='Enter your Gender' className='form-control' 
                        onChange={e => setGender(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Relationship</label>
                        <input type="text" placeholder='What Are you in the Family' className='form-control' 
                        onChange={e => setRelationship(e.target.value)}
                        />
                    </div>

                    <Link to="/" className='btn btn-danger'>Back</Link>
                </form>
            </div>

        </div>
    )}
export default UpdateBtn