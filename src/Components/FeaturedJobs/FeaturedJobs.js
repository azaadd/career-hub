import React, { useState } from 'react';
import './FeaturedJobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';
import { addToDb } from '../../Utilities/LocalDb';




const FeaturedJobs = ({ featuredJob }) => {
    // console.log(featuredJob);
    // const jobdetails = useLoaderData();


    const { id, comIcon, jobTitle, companyName, remote, fullTime, location, salary, viewdetails } = featuredJob;

    // const [jobdetail, setJobdetail] = useState([]);

    // const handleAddToJobDetail = featuredJob => {
    //     const exists = jobdetail.find(jd => jd.id === jobdetail.id);
    //     if (exists) {

    //     }
    //     else {
    //         const newJobdetail = [...jobdetail, featuredJob];
    //         setJobdetail(newJobdetail);

    //         addToDb(id);
    //         // console.log(featuredJob.id)
    //     }

    // }





    return (

        <div className='featured-job'>

            <img className='company-img' src={comIcon} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <button className='remote'>{remote}</button>
            <button className='remote'>{fullTime}</button>
            <div className='loc-salary'>
                <p><FontAwesomeIcon icon={faLocationPin} /> {location}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</p>
            </div>
            <div className='view-details'>
                <Link className='apply' to={`/jobdetails/${id}`}
                
                // onClick={() => handleAddToJobDetail(id)}

                

                >{viewdetails}</Link>

            </div>
        </div>

    );
};

export default FeaturedJobs;