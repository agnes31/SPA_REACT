import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageA from '../assets/imgA.jpg';
import imageB from '../assets/imgB.jpg';
import imageC from '../assets/imgC.jpg';
import imageD from '../assets/imgD.jpg';
import imageE from '../assets/imgE.jpg';
import imageF from '../assets/imgF.jpg';

function MyCarousel() {
  return (
    <Carousel showArrows={true} autoPlay={true} interval={1000} showStatus={false}>
      <div>
        <img src={imageA} alt="Image A" />
        <p className="legend">
          <Link to="/catalogue">MAGASINER</Link>
        </p>
      </div>
      <div>
        <img src={imageB} alt="Image B" />
        <p className="legend">
          <Link to="/catalogue">MAGASINER</Link>
        </p>
      </div>
      <div>
        <img src={imageC} alt="Image C" />
        <p className="legend">
          <Link to="/catalogue">MAGASINER</Link>
        </p>
      </div>
      <div>
        <img src={imageD} alt="Image D" />
        <p className="legend">
          <Link to="/catalogue">MAGASINER</Link>
        </p>
      </div>
      <div>
        <img src={imageE} alt="Image E" />
        <p className="legend">
          <Link to="/catalogue">MAGASINER</Link>
        </p>
      </div>
      <div>
        <img src={imageF} alt="Image F" />
        <p className="legend">
          <Link to="/catalogue">MAGASINER</Link>
        </p>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
