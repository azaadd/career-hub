import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../Utilities/LocalDb';
import './Appliedjobs.css'
import AllAppliedJobItem from '../AllAppliedJobItem/AllAppliedJobItem';

const AppliedJobs = () => {
    const appliedjobs = useLoaderData();



    const [apply, setApply] = useState([]);

    useEffect(() => {
        const storedJobs = getShoppingCart();
        let savedJobs = [];

        for (const id in storedJobs) {
            const foundJob = appliedjobs.find((apply) => apply.id === parseInt(id));
            if (foundJob) {
                savedJobs.push(foundJob);
            }
        }

        setApply(savedJobs)
    }, [appliedjobs]);

    const handleAddToRemoteJobs = (apply) => {
        const remoteJob = apply.filter((remote) => remote.remote === "Remote");
        setApply(remoteJob);
    };

    const handleAddToOnsiteJobs = (apply) => {
        const onsiteJob = apply.filter((onsite) => onsite.remote === "Onsite");
        setApply(onsiteJob);
    };


    return (
        <div>
            <h2 className='job-detail-header'>Applied Jobs</h2>

            <div className='applied-job-container-wrap'>
                <div className='remote-container'>
                    <button className='remote left' onClick={() => handleAddToRemoteJobs(apply)}>Show Remote Jobs</button>
                    <button className='remote left' onClick={() => handleAddToOnsiteJobs(apply)}>Show Onsite Jobs</button>
                </div>
                {
                    apply.map(jobItem => <AllAppliedJobItem
                        key={jobItem.id}
                        jobItem={jobItem}
                    ></AllAppliedJobItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;