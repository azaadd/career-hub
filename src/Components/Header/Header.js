import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className='header'>
            <nav>
                <h2>WebExpert Farm</h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/appliedjobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>

                </div>
                <button className='apply'>Start Applying</button>
            </nav>
            
        </section>
    );
};

export default Header;