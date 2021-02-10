import axios from 'axios'
import React, { Component } from 'react'
import Navbar from '../common/Navbar';

export default class TaskList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             records:[],
        }
    }
    
    componentDidMount(){
        this.funGetTasks();
    }

    funGetTasks=()=>{
        axios.get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch')
        .then((res)=>{
            console.log(res.data.data);
            this.setState({records:res.data.data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div>
                    <table className="table table-striped">
                        <thead className="bg-warning">
                                <tr>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Pincode</th>
                                    <th>State</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.records.map((task,i)=>(
                                    <tr key={i}>
                                        <td>{task.city}</td>
                                        <td>{task.email}</td>
                                        <td>{task.first_name}</td>
                                        <td>{task.last_name}</td>
                                        <td>{task.pincode}</td>
                                        <td>{task.states}</td>
                                        <td><button className="btn btn-primary btn-sm">Edit</button></td>
                                        <td><button className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
