import React from 'react';
import './AllAppliedJobItem.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const AllAppliedJobItem = ({ jobItem }) => {

    const { id, comIcon, jobTitle, companyName, remote, fullTime, location, salary, viewdetails } = jobItem;
    return (
        <div className='applied-job-container'>
            <img className='applied-job-icon' src={comIcon} alt="" />
            <div className='applied-job-info'>
                <h3>{jobTitle}</h3>
                <p>{companyName}</p>
                <button className='remote'>{remote}</button>
                <button className='remote'>{fullTime}</button>
                <div className='loc-salary'>
                    <p><FontAwesomeIcon className='fa-icon-color1' icon={faLocationPin} /> {location}</p>
                    <p><FontAwesomeIcon className='fa-icon-color1' icon={faDollarSign} /> Salary: {salary}</p>
                </div>

            </div>
            <div className='view-details'>
                <Link className='apply' to={`/jobdetails/${id}`}>{viewdetails}</Link>
            </div>
        </div>
    );
};

export default AllAppliedJobItem;