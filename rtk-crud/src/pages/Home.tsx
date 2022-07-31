import React from 'react';
import {useContactsQuery} from "../services/contactsApi";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
    const {data, isLoading, error} = useContactsQuery();

    if (isLoading) {
        return <h3>Loading...</h3>
    }
    return (
        <div style={{ marginTop: '100px'}}>
            <Link to="/addContact">
                <button className="btn btn-add">Add Contact</button>
            </Link>
            <br />
            <br />
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center"}}>No.</th>
                        <th style={{ textAlign: "center"}}>Name</th>
                        <th style={{ textAlign: "center"}}>Email</th>
                        <th style={{ textAlign: "center"}}>Contact</th>
                        <th style={{ textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <Link to={`/editContact/${item.id}`}>
                                        <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete">
                                        Delete
                                    </button>
                                    <Link to={`/info/${item.id}`}>
                                        <button className="btn btn-view">View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
