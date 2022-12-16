import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);

    const updateName = (e) =>{
        e.preventDefault();
        
        
    }
    return (
        <Form onSubmit={updateName}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>update User Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Update user Name" />
         </Form.Group>
  
        
        
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    );
};

export default Profile;