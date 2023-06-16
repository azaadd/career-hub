import React from 'react';
import './FeaturedJobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ featuredJob }) => {
    const { comIcon, jobTitle, companyName, remote, fullTime, location, salary, viewdetails } = featuredJob;

    return (
        <div className='featured-job'>

            <img className='company-img' src={comIcon} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <button className='remote'>{remote}</button>
            <button className='remote'>{fullTime}</button>
            <div className='loc-salary'>
                <p>
                    <FontAwesomeIcon icon={faLocation} /> {location}</p>
                <p>
                    <FontAwesomeIcon icon={faDollarSign} /> {salary}</p>
            </div>
            <div className='view-details'>
                <Link className='apply' to="/jobdetails">{viewdetails}</Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;