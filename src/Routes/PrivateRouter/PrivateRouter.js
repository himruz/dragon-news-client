import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

        if(loader){
            return  <Spinner animation="grow" variant="primary" />
        }

        if(!user){
            return <Navigate to ='/login' state={{from:location}} replace></Navigate>
        }
            return children
        
};

export default PrivateRouter;