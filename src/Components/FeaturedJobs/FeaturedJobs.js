import React from 'react';
import './FeaturedJobs.css'

const FeaturedJobs = ({featuredJob}) => {
    const {comIcon, jobTitle, companyName, remote, fullTime, location, salary, viewdetails} = featuredJob;
    
    return (
        <div className='featured-job'>
            
            <img className='company-img' src={comIcon} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <button className='remote'>{remote}</button>
            <button className='remote'>{fullTime}</button>
            <div className='loc-salary'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='apply'>{viewdetails}</button>
        </div>
    );
};

export default FeaturedJobs;