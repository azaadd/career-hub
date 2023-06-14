import React from 'react';
import './Home.css';
import personImage from '../../images/developer.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className='header-info-wrap'>
                <div className='header-info'>
                    <h1>Code a New <span className='d-color'>Career</span></h1>
                    <p>Equip yourself with the data and knowledge needed to program a better future.</p>
                    <button className='apply'>Get Started</button>
                </div>
                <img className='person-img' src={personImage} alt="" />
            </div>
        </div>
    );
};

export default Home;