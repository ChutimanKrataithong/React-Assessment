import React from 'react';
import Navbar from './Nav';
import Button from './button';
import './App.css'
import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {

  const [members, setMembers] = useState([]);
//   const [reload,setReload] = useState(!true);

  useEffect(()=>{
    const getData = async () => {
        const response = await axios.get(
            'https://jsd5-mock-backend.onrender.com/members'
        );
        console.log('res',response)
        console.log('data',response.data)
        setMembers(response.data)
    };
    getData();
  },[]);
 

   return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="text_hearder">
                <h1>Generation Thailand Home - User Sector</h1>
            </div>
            
            <div>
                <Button />
            </div>

            <div className="App">
                
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                    </tr>
                
                    {members.map((member) => (
                        <tr>
                            <td>{member.name}</td>
                            <td>{member.lastname}</td>
                            <td>{member.position}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};


export default User;