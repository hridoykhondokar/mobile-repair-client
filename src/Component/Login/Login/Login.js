import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../../Shared/Nav/Nav';
import loginPhoto from '../../../image/loginPhoto.jpg';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        errors: '',
        success: false
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = res.user;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUserInfo(user.name);
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { };
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setUser(newUserInfo)

                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = res.user;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { };
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
    };

    //handleBlur event /.check validation email and password inputs..
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        };
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        };
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo); 
        }
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            console.log('user name updated successfully')
        }).catch((error) => {
            console.log(error)
        });
    }


    return (
        <div className="login-container">
            <Nav/>
            <div className="container">
                <div className='row'>
                    <div className="col-md-5">
                        <div className="form-header shadow p-5 mb-5 mt-5 bg-white rounded text-center">
                            <h2 style={{ color: '#3a4256' }} className='pb-5 '>{newUser ? 'Sign Up' : 'Login'}</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {
                                    
                                newUser && 
                                <div onBlur={handleBlur} className="form-group ">
                                    <input type="text" name="name" className="form-control mb-2" placeholder="Your Name" required {...register("name", { required: true })} />
                                </div>
                                
                                }

                                <div onBlur={handleBlur} className="form-group ">
                                    <input type="text" name="email" className="form-control mb-2" placeholder="Your Email" required {...register("email", { required: true })} />
                                </div>

                                <div onBlur={handleBlur} className="form-group">
                                    <input type="password" name="password" className="form-control mb-2" placeholder="password" required {...register("password", { required: true })} />
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-brand form-control">{newUser ? 'Sign Up' : 'Log In'}</button>
                                </div>
                            </form>
                            <p style={{ color: '#1CC7C1' }}>{user.error}</p>
                            {
                                user.success && <p style={{ color: 'green' }}>user {newUser ? 'create' : 'logged In'} successfully</p>
                            }

                            {!newUser ? <small>Don't have an account ? <strong style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Create an account</strong></small> :
                                <small>Already has an account ? <strong style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Login</strong> </small>}

                        </div>
                    </div>
                    <div className="col-md-7">
                           <img style={{height:'auto' , width:'100%'}} src={loginPhoto} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;