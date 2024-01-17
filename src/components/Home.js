import React from 'react'
import video1 from '../assets/video.mp4'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className='Home'>
        <div className="Overlay">
          <video src={video1} autoPlay muted loop type='video/mp4'></video>
            <div className='Home-Container'>
              <span className='Upper'>
                  Our Packages
              </span>

            </div>
        </div>

      </section>
    </div>
  )
}

export default Home