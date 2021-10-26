import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
import './AddAdmin.css'

const AddAdmin = () => {


    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {

        fetch('https://mighty-island-77789.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <div className="admin">
                        <h1>Add Admin</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="admin-form">
                                <div className='form-group'>
                                    <input type='text' placeholder='Admin name' className='form-control' {...register("name", { required: true })} />
                                </div>
                                <br />
                                <div className='form-group'>
                                    <input type='text' placeholder='Admin Email' className='form-control' {...register("email", { required: true })} />
                                </div>
                                <br />
                                <div className='form-group'>
                                <button type="submit" className="btn btn-brand form-control"> Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;