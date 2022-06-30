import React from 'react';
import { Link } from 'react-router-dom';
import Recruiter from '../assets/recruiter-banner.svg'
import Amazon from '../assets/amazon.png';
import Lenskart from '../assets/lenskart.png';
import Flipkart from '../assets/flipkart.png';
import Byjus from '../assets/byjus.png';
import Footer from '../components/Footer';
export default function Home() {
    // const clients=['../assets/recruiter-banner.svg','../assets/amazon.png','../assets/lenskart.png','../assets/flipkart.png','../assets/byjus.png']
    return (
        <div>
            <div className='p-5'>
                <h1 className='text-center mb-5'>Direct Hiring App for Startup
                    Ecosystem</h1>
                <div className='row p-0 m-0'>
                    <div className='col me-3'>
                        <h2>Want to Hire Instantly?</h2>
                        <p>Hirect enables Founders/CXOs/Hiring Managers/Business Owners to chat directly with relevant, AI-filtered candidates, without consultants, and with 100% data privacy!</p>
                        <div>
                            <img src={Recruiter} alt='image' width='100%'/>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <div className='shadow p-3  bg-white rounded '>
                            <h2>Schedule a call now!</h2>
                            <p>Your next hire is right here. Get started.</p>
                            <Link to='/profile'>
                                <button className='btn btn-success'>Go to Add Profile</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='w-50 m-auto mt-5'>Direct and Instant Hiring. Join the list of leading companies.</h1>
            <div className='bg-light p-5 mt-3'>
                <div className='row text-center'>
                    <div className='col'>
                    <img src={Amazon} alt='Amazon' />
                    </div>
                    <div className='col'>
                    <img src={Flipkart} alt='Amazon' />
                    </div>
                    <div className='col'>
                    <img src={Byjus} alt='Amazon' />
                    </div>
                    <div className='col'>
                    <img src={Lenskart} alt='Amazon' />
                    </div>
                {/* d-flex justify-content-between */}
                    
                    
                    
                   
                </div>
            </div>
            <Footer/>
        </div>
    )
}
