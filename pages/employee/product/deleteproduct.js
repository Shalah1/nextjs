import Link from "next/link"
import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/employee/ProductIndex`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  deleteRow(id, e) {
    axios.delete(`http://localhost:3000/employee/deleteproduct/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })
  }

  render() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Products List</h1>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">ID</th>
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">PRODUCT NAME</th>
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">PRODUCT CATEGORY</th>
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">PRODUCT PICTURE</th>
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">PRODUCT REVIEWS</th>
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">PRODUCT PRICE</th>
                  <th className="text-left py-3 px-4 uppercase font-bold text-sm text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {this.state.posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-3 px-4">{post.id}</td>
                    <td className="py-3 px-4">{post.namep}</td>
                    <td className="py-3 px-4">{post.ProductCategory}</td>
                    <td className="py-3 px-4">{post.myfile}</td>
                    <td className="py-3 px-4">{post.Productreviews}</td>
                    <td className="py-3 px-4">{post.ProductPrice}</td>
                    <td className="py-3 px-4">
                      <button className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-500 transition duration-200" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    )
  }
}
