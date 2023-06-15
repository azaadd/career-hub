import React from 'react';

const JobCategory = ({ job }) => {
    const { category, icon, availableJobs } = job;
    return (
        <div className='job-item'>
            <img className='category-icon' src={icon} alt="" />
            <h3>{category}</h3>
            <p>{availableJobs}</p>
        </div>
    );
};

export default JobCategory;