import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
        <nav className="home__nav">
        <div className="home__nav-logo app__flex">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
            <h2 className="home__nav-logo-text head-text sidebar__menu">Group 83</h2>
        </div>

        <div className="home__nav-auth">
          <Link to="/signin">
          <button className="home__nav-auth-btn white">Sign In</button>
          </Link>
          <Link to="/signup">
          <button className="home__nav-auth-btn">Sign Up</button>
          </Link>

        </div>
        </nav>

        <div className="home__container">
          <div className="home__container-left">
            <h1 className="home__container-heading">Mavelous Books<br/> At Your Fingertips</h1>
            <p className="p-text home__container-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quos culpa amet accusamus optio nobis eaque dolorem inventore, magnam doloremque placeat id repellat nulla minus!</p>
          <Link to="/signup">
            <button className="get-started">Get Started</button>
            </Link>
          </div>

          <div className="home__container-right">
            <img src="https://res.cloudinary.com/midas-acadeny/image/upload/v1652822709/Pngtree_blue_purple_book_education_information_5374873_dxyfij.png" alt="Book Image" />
          </div>
        </div>
    </div>
  )
}

export default Home