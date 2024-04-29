import React from 'react'

import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className='home-container'>
          

          <Navbar/>
            <div className="home-main">
               
                <div className="btn-section"> 
                 <h1 className="description">ASANA<br/>MATE</h1>
                    {/* <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link> */}

                </div>
                
                <div className='image'>
                    <img src='./yogasan.png' className='yoga-img'/>
                </div>
            </div>
        </div>
    )
}

