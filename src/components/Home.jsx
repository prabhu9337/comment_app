import React from 'react'
import Navbar from './Navbar'
import '../style/home.css'

const Home = () => {
  return (
      <>
        <Navbar/>
          <div className="firstDiv">
            <div className="textArear">
              <textarea cols="50" rows="10" placeholder="Comment here..."></textarea>
            </div>
            <div className="commentSec">
                <p>10 comments</p>
            </div>
            <div className="userComment">
              <div className="main">
                <div className="h2">
                  <div className="imgSec">
                    <img src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_960_720.jpg" alt="" />
                  </div>
                  <p>prabhupada121@gmail.com</p>
                </div>
                <div className="h1">
                  <h1>Lorem ipsum dolor Lorem ipsum dolor sit amet. lorem </h1>
                </div>
                </div>
              </div>
          </div>
      </>
  )
}

export default Home