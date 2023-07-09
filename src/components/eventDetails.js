import React from 'react'
import Navbar from './Navbar';
import Strokebtn from './Strokebtn';
import '../fonts/RedRose-Light.ttf';
import "./css/eventDetails.css";
import profile from "./Images/profile.jpeg";
export const EventDetails = () => {
  const gradientBackgroundStyle = {
    background: 'linear-gradient(to bottom, black, #012137 60%, black)'
  };
  const h4 = {
    fontSize: '1.6rem',
    color: '#fff',
    fontWeight: 'medium',

    marginTop: '3rem',
    fontWeight: 'bold',
  }
  const searchBar = {
    width: '32rem',
    height: '3rem',
    borderRadius: '30px',
    backgroundColor: 'rgba(0, 0, 0.6, 0.5)',
    color: 'rgba(128, 128, 128, 0.8)',
    fontSize: '17px',
    textAlign: 'left',
    padding: '1rem',

    marginTop: '1rem',
    fontWeight: 'bold',
    border: '0.5px solid white',
  }
  const box = {
    width: '28rem',
    height: '15rem',
    backgroundColor: 'rgba(0, 0, 0.6, 0.5)',
    color: 'rgba(128, 128, 128, 0.8)',
    fontSize: '17px',

    padding: '1rem',
    marginTop: '1rem',
    fontWeight: 'bold',
    border: '0.5px solid white',
  }
  const h1 = {
    fontSize: '1.8rem',
    color: '#fff',
    marginLeft: '11rem',
    marginTop: '5rem',
    fontWeight: 'bold',
  }
  const dateTime = {
    height: '10rem',
    width: '25rem',
    color: 'rgba(128, 128, 128, 0.8)',
    border: '0.5px solid white',
    fontWeight: 'bold',
    paddingTop: '1.5rem',
    marginLeft: '10.5rem',
    marginTop: '2rem'

  }
  const column = {
    display: 'flex',
    padding: '10px'
  }
  const p = {
    fontSize: '20px',
    marginTop: '0.5rem'
  }
  const p2 = {
    marginLeft: '1rem',

  }
  const p3 = {
    fontWeight: 'lighter',
    marginTop: '0.5rem',
    marginLeft: '1rem'
  }
  const button3 = {
    border: '0.5px solid white',
    width: '8rem',
    height: '2.3rem',
    borderRadius: '10px',
    fontSize: '20px'

  }
  const button4 = {
    border: '0.5px solid white',
    width: '8rem',
    height: '2.3rem',
    borderRadius: '10px',
    marginLeft: '1rem',
    fontSize: '20px'
  }
  const h2 = {
    fontSize: '1.8rem',
    color: '#fff',

    marginTop: '5rem',
    fontWeight: 'bold',
  }
  const h7 = {
    fontSize: '1.8rem',
    color: '#fff',

    marginTop: '5rem',
    fontWeight: 'bold',
    marginLeft: '5rem'
  }
  const titles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '1rem'
  }

  const submitBtn = {
    width: '10rem',
    height: '2.3rem',
    background: 'linear-gradient(to right, #a0d9e7 , #1995b5 82%, #1995b5)',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '5rem',

  }
  const h3 = {
    fontSize: '1.4rem',
    color: '#fff',
    marginLeft: '1rem',
    fontWeight: 'bold',
  }
  const h5 = {
    color: 'rgba(128, 128, 128, 0.8)',
    fontSize: '0.8rem',
    marginLeft: '1rem',
    fontWeight: 'bold',
  }
  const img = {
    marginLeft: '5rem',

  }
  const container2 = {
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <div style={gradientBackgroundStyle}>
      <Navbar />
      <div className='page-name'>
        <Strokebtn title="" fill="" />
      </div>

      <div className="absolute top-30 right-0 mr-20 mt-20">
        <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2">
          <img
            className="object-cover h-full w-full"
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
      <img
        className="mt-60 ml-44 rounded-"
        src={profile}
        alt="profile"
      />

      <div style={container2}>
        <h1 style={h1}>Introduction to web3</h1>

        <div className="dateTime " style={dateTime}>

          <div className="date"><p style={p2}>Thu, February 23</p></div>
          <div className='column' style={column}>
            <button style={button3}>12:00 pm</button>
            <p style={p}>To</p>
            <button style={button4}>12:00 pm</button>
          </div>
          <div className="timezone"><p style={p3}>GMT + 5:30 Kolkata</p> </div>
        </div>
      </div>

      <div className='container'>
        <div className="left-half">
          <form>
            <h1 style={h2}>Email Address *</h1>
            <input
              type="text"
              value="Enter your Email Address"
              placeholder="Enter your Email Address"
              className="search-input"
              style={searchBar}
            />

            <h1 style={h2}>Contact Number*</h1>
            <input
              type="text"
              value="Enter your Contact Number"
              placeholder="Enter your Email Address"
              className="search-input"
              style={searchBar}
            />


            <h4 style={h4}>Why do you want to attend this event?</h4>
            <input
              type="text"
              value="Enter your answer (max characters : 300"
              placeholder="Enter your Email Address"
              className="search-input"
              style={box}
            />

            <h1 style={h2}>Linkedin URL</h1>
            <input
              type="text"
              value="Enter your Linkedin Profile URL"
              placeholder="Enter your Email Address"
              className="search-input"
              style={searchBar}
            />

            <h1 style={h2}>GitHub URL</h1>
            <input
              type="text"
              value="Enter your GitHub Profile URL"
              placeholder="Enter your Email Address"
              className="search-input"
              style={searchBar}
            />

            <button style={submitBtn}>Submit</button>
          </form>

        </div>
        <div className="right-half">


          <div className="host">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2" style={img}>
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"

              />
            </div>
            <div style={titles}>
              <h1 style={h3}>Profile Name</h1>
              <h1 style={h5}>Host</h1>
            </div>
          </div>
          <div className="host">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2" style={img}>
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"

              />
            </div>
            <div style={titles}>
              <h1 style={h3}>Profile Name</h1>
              <h1 style={h5}>Host</h1>
            </div>
          </div>

          <div className="host">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2" style={img}>
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"

              />
            </div>
            <div style={titles}>
              <h1 style={h3}>Profile Name</h1>
              <h1 style={h5}>Host</h1>
            </div>
          </div>


          <div className="host">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2" style={img}>
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"

              />
            </div>
            <div style={titles}>
              <h1 style={h3}>Profile Name</h1>
              <h1 style={h5}>Host</h1>
            </div>
          </div>

          <div className="line"></div>

          <h1 style={h7}>Speakers</h1>

          <div className="host">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2" style={img}>
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"

              />
            </div>
            <div style={titles}>
              <h1 style={h3}>Profile Name</h1>
              <h1 style={h5}>Speaker</h1>
            </div>
          </div>

          <div className="host">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2" style={img}>
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"

              />
            </div>
            <div style={titles}>
              <h1 style={h3}>Profile Name</h1>
              <h1 style={h5}>Speaker</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};
export default EventDetails;
