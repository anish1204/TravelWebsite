import React from 'react'

import './Footer.css'
import { IoSend } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <section>
                
                <div className='Overlay1'>
                    <h4>KEEP IN TOUCH</h4>
                    <div className='Data'>
                        <h2>TRAVEL WITH US</h2>
                        <input className='EmailInputBar' placeholder='Enter Email address..' />
                        <button className='SendBtn'><div ><IoSend /></div></button><br></br>
                    </div>

                    <br />
                    <div className='FinalInfo'>
                        <div className='LeftFooter'>
                            <h2>TRAVEL</h2>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className='LeftLogo'>
                                <FaFacebook className='LeftIndIcon' />
                                <FaInstagram className='LeftIndIcon' />
                                <FaSnapchat className='LeftIndIcon' />
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='RightFooter'>
                            <div className='AgencySec'>
                                <ul>
                                    <p>AGENCY</p>
                                    <li className='lipoints' >Services</li>
                                    <li className='lipoints'>Insuarance</li>
                                    <li className='lipoints'>Agency</li>
                                    <li className='lipoints'>Tourism</li>
                                    <li className='lipoints'>Payment</li>
                                </ul>
                            </div>
                            <div className='PartnerSec'>
                                <ul>
                                    <p>PARTNERS</p>
                                    <li className='lipoints'>Booking</li>
                                    <li className='lipoints'>RentalCar</li>
                                    <li className='lipoints'>HostelWorld</li>
                                    <li className='lipoints'>Trivago</li>
                                    <li className='lipoints'>TripAdvisor</li>
                                </ul>
                            </div>
                            <div className='LastSec'>
                                <ul>
                                    <p>LAST-MIN</p>
                                    <li className='lipoints'>London</li>
                                    <li className='lipoints'>Calafornia</li>
                                    <li className='lipoints'>Indonesia</li>
                                    <li className='lipoints'>Europe</li>
                                    <li className='lipoints'>Oceania</li>
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