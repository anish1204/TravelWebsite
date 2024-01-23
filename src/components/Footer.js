import React from 'react'

import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <section>
                <div className='Overlay'>
                    <h4>KEEP IN TOUCH</h4>
                    <div className='Data'>
                        <h2>TRAVEL WITH US</h2>
                        <input placeholder='Enter Email address..' />
                        <button>SEND</button>
                    </div>

                    <br />
                    <div className='FinalInfo'>
                        <div className='LeftFooter'>
                            <h2>TRAVEL</h2>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className='LeftLogo'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaSnapchat />
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='RightFooter'>
                            <div className='AgencySec'>
                                <ul>
                                    <p>OUR AGENCY</p>
                                    <li>Services</li>
                                    <li>Insuarance</li>
                                    <li>Agency</li>
                                    <li>Tourism</li>
                                    <li>Payment</li>
                                </ul>
                            </div>
                            <div className='PartnerSec'>
                                <ul>
                                    <p>PARTNERS</p>
                                    <li>Booking</li>
                                    <li>RentalCar</li>
                                    <li>HostelWorld</li>
                                    <li>Trivago</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                            <div className='LastSec'>
                                <ul>
                                    <p>LAST-MIN</p>
                                    <li>London</li>
                                    <li>Calafornia</li>
                                    <li>Indonesia</li>
                                    <li>Europe</li>
                                    <li>Oceania</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <video src={video1}/> */}



                </div>

            </section>
        </div>
    )
}

export default Footer