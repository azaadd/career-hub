import React, { useEffect, useState } from 'react';
import './Home.css';
import personImage from '../../images/developer.jpg';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const jobCategory = useLoaderData();

    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, []);


    return (
        <div>
            <section>
                <div className='home-wrap'>
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
                </div>

                <section className='job-category-wrap'>
                    <div className='job-category-container'>
                        <h2 className='job-category-title'>Job Category List</h2>
                        <p className='job-category-info'>Explore lot of job opportunities with all the information you need. Its your future.</p>
                        <div className='job-category-item'>
                            {
                                jobCategory.map(job => <JobCategory
                                    key={job.id}
                                    job={job}
                                ></JobCategory>)
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className='featured-job-container'>
                            <h2 className='job-category-title'>Featured Jobs</h2>
                            <p className='job-category-info'>Explore lot of job opportunities with all the information you need. Its your future.</p>

                            <div className='featured-job-wrap'>
                                {
                                    featuredJobs.map(featuredJob => <FeaturedJobs
                                        key={featuredJob.id}
                                        featuredJob={featuredJob}
                                    ></FeaturedJobs>)
                                }
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Home;