import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const initialState = {
    name: '',
    email: '',
    contact: ''
}

const handleInputChange = (e) => {

}

const handleSubmit = () => {

}

const AddEdit = () => {
    const [formValue, setFormValue] = useState(initialState);
    const {name, email, contact} = formValue;
    const navigate = useNavigate();

    return (
        <div style={{ marginTop: '100px' }}>
            <form style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name ..."
                    value={name}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter email ..."
                    value={email}
                    onChange={handleInputChange}
                />
                <label htmlFor="contact">Contact</label>
                <input
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder="Enter contact number ..."
                    value={contact}
                    onChange={handleInputChange}
                />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddEdit;
