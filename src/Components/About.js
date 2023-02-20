import React from 'react';
import './Content.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAboutSlice } from '../Redux/AboutSlice';

const About = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAboutSlice())
    }, [dispatch])

    const Abouts = useSelector(state => state?.aboutSlices?.data)

    return (
        <div className=' container mt-4 mb-4'>
            <div className='row'>
                <div className="content card-text" data-aos="zoom-in" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: Abouts?.data?.content }}></div>

            </div>
        </div>
    );
};

export default About;