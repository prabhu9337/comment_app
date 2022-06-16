import React from 'react'
import Navbar from './Navbar'
import '../style/about.css';

const About = () => {
  return (
      <>
        <Navbar/>
          <div className="aboutSec">
            <div className="about">
              <h1>Comment App</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis laboriosam autem ad fugiat earum amet soluta, laborum temporibus repellat.</p>
            </div>
          </div>
      </>
  )
}

export default About