import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="bg-light py-3 container-fluid shadow-sm">
                <div className="container d-flex justify-content-between">
                    <Link to="/" className="h5 text-decoration-none text-dark mb-0">Home</Link>
                    <Link to="/add" className="h5 text-decoration-none text-dark mb-0">Add</Link>
                </div>
            </div>
        )
    }
}
