import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sliders = (props) => {

	const hiddenRef0 = useRef();
  const hiddenRef1 = useRef();

	const hiddenRef = [hiddenRef0, hiddenRef1];

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    for(let i = 0; i < 2; i++){
      if(window.pageYOffset + window.innerHeight - 60 >= hiddenRef[i].current.offsetTop){
        document.getElementsByClassName('slider')[i].classList.add('open');
      }else{
        document.getElementsByClassName('slider')[i].classList.remove('open');
      }
    }
 }

	return (
		<div className="sliders-container1">
			<div className="slider slider-one" ref={hiddenRef0}>
				<div className="slider-music-creator slider1">
					<div className="slider-header">
						<h2>Music	Creator</h2>
					</div>
					<p>Porta le Tue risorse musicali ed i tuoi progetti sotto i riflettori e interagisci con i tuoi fan in un modo del tutto nuovo.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div className="click-here-button">
					<Link to="music-creator">
					<h4>Read More</h4>
					</Link>
					</div>
				</div>
				<img src={require('../images/Immagine.jpg')} alt="Accessory" draggable="false" />
			</div>
			<div className="slider slider-two" ref={hiddenRef1}>
					{/*<img src={require('../images/L.png')} alt="Accessory" draggable="false" />*/}
				<div className="slider-music-creator slider2">
          <div className="slider-header">
            <h2>Investor / Fan</h2>
          </div>
          <p>Raccogli, Vendi e Scambia gli NFT dei tuoi artisti preferiti. Goditi un'esperienza esclusiva, assicurati accesso alle decisioni, finanzia i progetti musicali.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="click-here-button">
					<Link to="music-creator">
          <h4>Read More</h4>
					</Link>
          </div>
        </div>
      </div>
		</div>
  );
}

export default Sliders;

