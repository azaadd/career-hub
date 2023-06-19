import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/LocalDb';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCalendar, faPhone, faMailBulk, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    const details = useLoaderData();
    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const matchDetail = details.find((detail) => detail.id === parseInt(id));
        if (matchDetail) {
            setDetail(matchDetail)
        }
    }, []);

    const handleAddToJobApply = (id) => {
        addToDb(id)
    }


    const {
        jobTitle,
        email,
        jobDescription,
        jobResponsibility,
        educationalRequirements,
        experiences,
        location,
        salary,
        phoneNo,
    } = detail;

    return (
        <div className='job-detail-container-wrap'>
            <h2 className='job-detail-header'>Job Details</h2>
            <div className='job-detail-container'>
                <div className='job-detail-info'>
                    <p><strong>Job Description: </strong>{jobDescription}</p><br />
                    <p><strong>Job Responsibility: </strong>{jobResponsibility}</p><br />
                    <p><strong>Educational Requirements: </strong>{educationalRequirements}</p><br />
                    <p><strong>Experiences: </strong>{experiences}</p>
                </div>
                <div className='job-detail-contact'>
                    <div className='job-detail-contact-info'>
                        <h4>Job details</h4>
                        <hr />
                        <p><FontAwesomeIcon className='fa-icon-color' icon={faDollarSign} /><strong> Job Title : </strong> {salary}(Per Month)</p>
                        <p><FontAwesomeIcon className='fa-icon-color' icon={faCalendar} /><strong> Job Title : </strong>{jobTitle}</p>
                        <h4>Contact Information</h4>
                        <hr />
                        <p><FontAwesomeIcon className='fa-icon-color' icon={faPhone} /><strong> Phone : </strong>{phoneNo}</p>
                        <p><FontAwesomeIcon className='fa-icon-color' icon={faMailBulk} /><strong> Email : </strong>{email}</p>
                        <p><FontAwesomeIcon className='fa-icon-color' icon={faLocationPin} /> <strong>Address:</strong> {location}</p>
                    </div>
                    <button onClick={ () => handleAddToJobApply(id)} className='apply-now'>Apply Now</button>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;