import React from 'react'
import video1 from '../assets/video.mp4'
import './Home.css'
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { IoOptionsOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div>
      <section className='Home'>
        <div className="Overlay">
          <video src={video1} autoPlay muted loop type='video/mp4'></video>
          <div className='Home-Container'>
            <span className='Upper'>
              OUR PACKAGES
            </span>
            <h1>
              SEARCH YOUR HOLIDAY!
            </h1>
            <form className='EntryBox'>
            <div className='SearchBox'>
              <div className='InputBox'>
                <span>Search Your Destination</span>
                
                <input img={<IoLocationOutline/>} type='text' text='' placeholder='Enter text here...' />
                
              </div>
              <div className='InputBox'>
                <span>Select Date</span>
                <input type='date' text='' placeholder='' />
              </div>
              <div className='InputBox'>
                <span>Max Price</span>
                <input type='range' text='' placeholder='d' />
              </div>

            </div>
            <button className='Filter-button'>< FaFilter className='Filter-Icon'/>MORE FILTERS</button>
            </form>
            <div className='Social-Handles'>
              {/* <div className='left-icons'> */}
              <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<FaFacebook className='Handle-icons1' /> }</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<FaInstagram className='Handle-icons1'/>}</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<FaSnapchat className='Handle-icons1' />}</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<IoOptionsOutline className='Handle-icons1' />}</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<TbApps className='Handle-icons1' />}</a>
              {/* </div> */}
                
            
            </div>
            
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home