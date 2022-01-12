import React from 'react';
import Algebra from '../Subjects/Math/Algebra';
import Geometry from '../Subjects/Math/Geometry';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <h3>Home</h3>
            <Algebra />
            <Geometry />
        </div>
    );
};

export default Home;