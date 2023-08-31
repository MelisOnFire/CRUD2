import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'; 
import {Button} from 'react-bootstrap';



function Home() {

    const [Home, setHome] = useState([])
 
    useEffect(() => {
        axios.get("http://localhost:5000/")
        .then(res => setHome(res.data))
        .catch(err => console.log(err));
    },[])       


    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-1">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>FullName</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Relationship</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Home.map((data, i) => (
                                <tr key= {i}>
                                    <td>{data.FullName}</td>
                                    <td>{data.Age}</td>
                                    <td>{data.Gender}</td>
                                    <td>{data.Relationship}</td>
                                        <td>
                                            <Link  to={'update/${data.ID}'} className='btn btn-primary'>Update</Link>
                                            <Button className='btn btn-danger ms-2'>Delete</Button>
                                        </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to='/create' className='btn btn-success d-flex justify-content-center'>Create/ Add</Link>
            </div>
        </div>
    );
}
export default Home;