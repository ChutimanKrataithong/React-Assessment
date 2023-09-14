import React from 'react';
import Navbar from './Nav';
import Button from './button';
import { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Admin = () => {
  
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [posittion, setPosittion] = useState('');
  console.log(name,lastname,posittion)

  
    useEffect(()=>{
      const getData = async () => {
          const response = await axios.get(
              'https://jsd5-mock-backend.onrender.com/members'
          );
          
          setMembers(response.data)
      };
      getData();
    },[]);
    
    const createData = async (name, lastname, position) => {
      const response = await axios.post(
        'https://jsd5-mock-backend.onrender.com/members',
        {
          id:uuidv4(),
          name:name,
          lastname:lastname,
          position:position
      });
      if (response.status === 200){
        console.log("ok")
        setName('')
        setLastname('')
        setPosittion('')
      }
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1>Generation Thailand Home - Admin Sector</h1>
            <div>
                <Button />
            </div>
            <h4>Create User Here</h4>

            <div className = 'input'>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />

              <input
                type="text"
                placeholder="lastname"
                value={lastname}
                onChange={(ev) => setLastname(ev.target.value)}
              />

              <input
                type="text"
                placeholder="posittion"
                value={posittion}
                onChange={(ev) => setPosittion(ev.target.value)}
              />
              
              <button onClick ={()=>createData(name,lastname,posittion)}>Save</button>
            </div>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>

                {members.map((member) => (
                    <tr>
                      <td>{member.name}</td>
                      <td>{member.lastname}</td>
                      <td>{member.position}</td>
                      <td>
                        <button>Delete</button>
                      </td>
                    </tr>
                ))}
               
                </table>
            
        </div>
        
    );
};

export default Admin;


