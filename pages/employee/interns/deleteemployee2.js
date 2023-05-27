
import React from 'react';
import axios from 'axios';

export default class EmployeeInternsList extends React.Component {
  state = {
    interns: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/employee/index2`).then((res) => {
      const interns = res.data;
      this.setState({ interns });
    });
  }

  deleteIntern(id, e) {
    axios.delete(`http://localhost:3000/employee/deleteemployee2/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      const interns = this.state.interns.filter((item) => item.id !== id);
      this.setState({ interns });
    });
  }

  render() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-blue-600 text-3xl font-bold my-4 border-b-2 border-blue-400">Employee Interns List</h1>

        <table className="table-fixed w-full bg-white rounded-md shadow-lg">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="w-1/12 p-2 border border-blue-400 text-left">ID</th>
              <th className="w-3/12 p-2 border border-blue-400 text-left">Name</th>
              <th className="w-3/12 p-2 border border-blue-400 text-left">Address</th>
              <th className="w-2/12 p-2 border border-blue-400 text-left">Salary</th>
              <th className="w-2/12 p-2 border border-blue-400 text-left">Junior Rank</th>
              <th className="w-2/12 p-2 border border-blue-400 text-left">Employee</th>
              <th className="w-1/12 p-2 border border-blue-400 text-left">Age</th>
              <th className="w-2/12 p-2 border border-blue-400 text-left">Phone Number</th>
              <th className="w-1/12 p-2 border border-blue-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.interns.map((intern) => (
              <tr key={intern.id}>
                <td className="p-2 border border-blue-400 text-center">{intern.id}</td>
                <td className="p-2 border border-blue-400">{intern.name}</td>
                <td className="p-2 border border-blue-400">{intern.address}</td>
                <td className="p-2 border border-blue-400">{intern.salary}</td>
                <td className="p-2 border border-blue-400">{intern.juniorrank}</td>
                <td className="p-2 border border-blue-400">{intern.employee}</td>
                <td className="p-2 border border-blue-400">{intern.age}</td>
                <td className="p-2 border border-blue-400">{intern.phonenumber}</td>
                <td className="p-2 border border-blue-400 text-center">
                  <button
                    onClick={(e) => this.deleteIntern(intern.id, e)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                  </td>
                
                             </tr>
                            ))}
                          </tbody>
                
                        </table>
                      </div>
                    )
                  }
                }