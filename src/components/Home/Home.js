import React from 'react';
import './Home.css'
import carImg from  '../../resources/images/home-car.png'



const Home = () => {
    return (
      <div>
        <div className="home-container">
          <div className="text-section">
            <h1>
              <span className="text-purple"> Stnning</span>
              <span className="text-orange"> Performance </span>
            </h1>
            <p>
              With this impressive look,Mazda CX-5 will provide you stunning
              performance in speed.Very economic fuel consumption will give a
              long ride economic experience.High technology traction controll
              will provide you extra smooth driving in offroading
              roads.Impressive Desing will make the diffeence.
            </p>
            <h2 className="text-orange">6 Free Services</h2>
            <p>Mazda CX-5 users can have 6 free services and 3 services @50% off at Mazda center.Register below to avail this offer.</p>
            <button className='btn'>Register Now</button>
          </div>
          <div className="img-section">
            <img src={carImg} alt="car-overview" />
          </div>
        </div>
      </div>
    );
};

export default Home;