import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {vehicleType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {vehicleType} </h1>
            <p>Want a <Link to="/home">different Vehicle?</Link> </p>
        </div>
    );
};

export default Book;