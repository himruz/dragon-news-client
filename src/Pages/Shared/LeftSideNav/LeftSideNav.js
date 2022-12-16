import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categoris, setCategoris] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res=>res.json())
        .then(data=>setCategoris(data))
    },[])

    return (
        <div>
            <h4>All Category</h4>
            {
                categoris.map(category=><p key={category.id}><Link to ={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;


      