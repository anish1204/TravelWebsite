import React from 'react'
import video1 from '../assets/video.zip'
import './Home.css'
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { IoOptionsOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";

import pic1 from '../assets/pic1.zip';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';

const Home = () => {
  return (
    <>
    
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
            {/* <div className='Social-Handles'>
            
              <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<FaFacebook className='Handle-icons1' /> }</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<FaInstagram className='Handle-icons1'/>}</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<FaSnapchat className='Handle-icons1' />}</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<IoOptionsOutline className='Handle-icons1' />}</a>
                <a className='Handle-icons' href='https://fonts.google.com/specimen/Roboto'>{<TbApps className='Handle-icons1' />}</a>
              
                
            
            </div> */}
            
          </div>
        </div>

      </section>
      {/* Now Starting with the Most visted places sections */}
      <br>
      </br>
      <div className='MostVp' >
      <h2>Most Visted Places</h2>
      </div>
      <div className='CardSection'>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic1} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic2} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic3} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
      </div>

            <br/><br/><br/><br/>
      <div className='CardSection'>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic4} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic5} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic6} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
      </div>
      <br/><br/><br/><br/>
      <div className='CardSection'>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic7} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic8} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
            <div className='Card'>
              <div className='card-img'>
                  <img src={pic9} />
              </div>
              <div className='card-loc'>
                    <h3>Bora Bora <br/> <IoLocationOutline/>      New Zealand
                    </h3>
                    <p></p>
              </div><br/>
              <div className='card-cat'>
                  <div className='category'>
                
                      <h5>CULTURAL<br></br>RELAX</h5>
                  </div>
                  <div className='card-amt'>
                      <h2>$500</h2>
                  </div>
              </div>
              <br></br>
              <div className='card-descp'>
                  <p>Bora Bora is a small South Pacific island known for its stunning turquoise lagoon and overwater bungalows, making it a popular luxury travel destination.</p>
              </div>
              <div className='card-button'>
                  <button>BOOK NOW</button>
              </div>
            </div>
      </div>
    
      
      
    </>
  )
}

export default Home