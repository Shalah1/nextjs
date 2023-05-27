import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/employee/DoctorIndex`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  deleteRow(id, e) {
    axios.delete(`http://localhost:3000/employee/deletedoctor/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <h1 className="text-blue-600 text-3xl font-bold my-4 border-b-2 border-blue-400">Delete DOCTOR</h1>

        <table className="table-fixed w-4/5 bg-white rounded-md shadow-lg">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="w-1/12 p-2 border border-blue-400">ID</th>
              <th className="w-3/12 p-2 border border-blue-400">Name</th>
              <th className="w-2/12 p-2 border border-blue-400">Speciality</th>
              <th className="w-3/12 p-2 border border-blue-400">Address</th>
              <th className="w-2/12 p-2 border border-blue-400">Password</th>
              <th className="w-1/12 p-2 border border-blue-400">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td className="p-2 border border-blue-400 text-center">{post.id}</td>
                <td className="p-2 border border-blue-400">{post.nameD}</td>
                <td className="p-2 border border-blue-400">{post.speaciality}</td>
                <td className="p-2 border border-blue-400">{post.address}</td>
                <td className="p-2 border border-blue-400">{post.password}</td>
                <td className="p-2 border border-blue-400">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    )
  }
}
