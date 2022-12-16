import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

import {Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {userSignUp, updateUserProfile, verifyEmail} = useContext(AuthContext);
 const navigate = useNavigate()
const [error, setError] = useState('')
const [accepted, setAccepted] = useState(false);

const handleAcceppt = (e) =>{
  setAccepted(e.target.checked)
};
  const registrationMethod = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    userSignUp(email, password)
    .then((result)=>{
      const user = result.user;
      setError('')
      console.log(user);
      form.reset();
      handleUserUpdate(name, photoURL)
      handleEmailVarification();
      toast.success('Please Verify Your E-mail ! ')
      navigate('/');
    }).catch((error)=>{
      setError(error.message)
      console.error(error);
      form.reset();
    })
  };

  const handleUserUpdate = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(()=>{

    }).catch((error)=>{
      console.error(error)
    })
  }

  const handleEmailVarification = () =>{
    verifyEmail()
    .then(()=>{

    }).catch((error)=>{
      console.error(error)
    })
  }

  return (
    <Form onSubmit={registrationMethod}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Photo</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Enter Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAcceppt} type="checkbox" label={<>Accept Our <Link to='/termsandconditions'>Terms and Conditions</Link></>} required/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger ms-2">
      {error}
      </Form.Text>
      
    </Form>
  );
};

export default Register;
