import React from 'react';
export default function Footer() {
  return (
    <div className='bg-secondary text-white p-5'>
       <div className='row p-0 m-0 '>
         <div className='col'>
            <h2 className='text-white'>Hirect</h2>
            <ul className='list-unstyled'>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Recruiters</li>
            </ul>
        </div>
        <div className='col'>
            <h2 className='text-white'>Support</h2>
            <ul className='list-unstyled'>
                <li>Support@hirect.in</li>
                <li>For Recruiters</li>
                <li>Schedule a Call</li>
            </ul>
        </div>
        <div className='col'>
            <h2 className='text-white'>Legal</h2>
            <ul className='list-unstyled'>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Product & Pricing</li>
                <li>Refund Policy</li>
            </ul>
        </div>   
        </div> 
    </div>
  )
}
