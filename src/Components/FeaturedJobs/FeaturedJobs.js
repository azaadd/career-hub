import React from 'react';
import './FeaturedJobs.css'

const FeaturedJobs = ({featuredJob}) => {
    const {comIcon, jobTitle, companyName, remote, fullTime, location, salary, viewdetails} = featuredJob;
    
    return (
        <div className='featured-job'>
            
            <img className='company-img' src={comIcon} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <button>{remote}</button>
            <button>{fullTime}</button>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
                <button>{viewdetails}</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;