import React from 'react';
import Navbar from './Nav';
import Button from './button';

const User = () => {

    const members = [
        {
          name: "Mock J",
          age: 99,
          weight: 66,
          running: 40,
          status: "Balance",
        },
    
        {
          name: "Grammar",
          age: 18,
          weight: 57,
          running: 50,
          status: "good",
        },
    
        {
          name: "maria",
          age: 19,
          weight: 42,
          running: 55,
          status: "good",
        },
        {
          name: "Mock J",
          age: 99,
          weight: 66,
          running: 40,
          status: "Balance",
        },
    
        {
          name: "Grammar",
          age: 18,
          weight: 57,
          running: 50,
          status: "good",
        },
    
        {
          name: "maria",
          age: 19,
          weight: 42,
          running: 55,
          status: "good",
        },
      ];

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1>Generation Thailand Home - Admin Sector</h1>
            <div>
                <Button />
            </div>
            <div id="app">
                <h5>Create User Here</h5>
                <RunningForm />
                <TableDisplay tableMember = {members} />
            </div>

        </div>
        
    );
};

const RunningForm = () => {
    return (
      <form id="data-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />
  
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />
        <br />
        <br />
  
        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" />
        <br />
        <br />
  
        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" />
        <br />
        <br />
  
        <button type="button">Add Data</button>
      </form>
    );
  };
  
  const TableDisplay = (props) => {
    const membersData = props.tableMember;
    return (
      <>
        <h5>Create User Here</h5>
        <table id="data-table" border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Current Running (Minutes)</th>
              <th>Good Running</th>
            </tr>
          </thead>
          <tbody>
            {membersData.map((item) => {
              return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.weight}</td>
                <td>{item.running}</td>
                <td>{item.status}</td>
            </tr>
              );
            })};
          </tbody>
        </table>
      </>
    );
  };

export default User;