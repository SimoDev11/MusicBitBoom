import React, { useState } from 'react';

const Description = (props) => {

	const [trans, setTrans] = useState(0);
	const [n, setN] = useState(0);

	const funcmslider = (dir) => {
		if(dir === "right"){
			/*
			if(window.screen.width > 1300){
				if(n < 1){
					document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans - document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3}px, 0)`;
        	setTrans(trans-document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3);
					setN(n + 1);
					console.log(n);
				}
			}else if(window.screen.width > 700){
				if(n < 2){
					document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans - document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4}px, 0)`;
        	setTrans(trans-document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4);
					setN(n + 1);
        	console.log(n);
				}
			}else if(window.screen.width > 500){
				if(n < 2){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans - document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3}px, 0)`;
          setTrans(trans-document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3);
          setN(n + 1);
          console.log(n);
        }
			}else{
				if(n < 3){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans - document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4}px, 0)`;
          setTrans(trans-document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4);
          setN(n + 1);
          console.log(n);
        }
			}
			*/
			if(n < 2){
			document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans - document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3}px, 0)`;
			setTrans(trans-document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3);
      setN(n + 1);
      console.log(n);
			}

		}else{
			/*
			if(window.screen.width > 1300){
        if(n > 0){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans + document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3}px, 0)`;
          setTrans(trans+document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3);
          setN(n - 1);
          console.log(n);

        }
      }else if(window.screen.width > 700){
        if(n > 0 ){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans + document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4}px, 0)`;
          setTrans(trans+document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4);
          setN(n - 1);
          console.log(n);
        }
      }else if(window.screen.width > 500){
				if(n > 0){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans + document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3}px, 0)`;
          setTrans(trans+document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3);
          setN(n - 1);
          console.log(n);

        }
			}else{
				if(n > 0 ){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans + document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4}px, 0)`;
          setTrans(trans+document.getElementsByClassName("orizontal-slider")[0].offsetWidth/4);
          setN(n - 1);
          console.log(n);
        }
			}
		}
		*/

		if(n > 0){
          document.getElementsByClassName("orizontal-slider")[0].style.transform = `translate(${trans + document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3}px, 0)`;
          setTrans(trans+document.getElementsByClassName("orizontal-slider")[0].offsetWidth/3);
          setN(n - 1);
          console.log(n);

        }
		}
	}

	return (
		<div className="description-container">

					
					{/*
		<div className="light"></div>
		
		<div className="light-2"></div>
		 <div className="light-3"></div>
*/}
		<div className="plane-for-arrow">
        <div className="orizontal-slider-arrow leftarrow" onClick={() => funcmslider("left")}>
					<span></span>
          <span></span>
        </div>
        <div className="orizontal-slider-arrow rightarrow" onClick={() => funcmslider("right")}>
					<span></span>
          <span></span>
        </div>
      </div>
		<div className="orizontal-slider">
			<div className="orizontal-slider-card">

			</div>
			<div className="orizontal-slider-card">

      </div>
			<div className="orizontal-slider-card">

      </div>
					{/*
			<div className="orizontal-slider-card">

      </div>

			<div className="orizontal-slider-card">

      </div>
			<div className="orizontal-slider-card">

      </div>
			<div className="orizontal-slider-card">

      </div>
			<div className="orizontal-slider-card">

      </div>
			*/}
		</div>
					{/*
		<div className="attributes-images-rarity-container">
      <div className="attributes-images-arrow-container">
        <div className="arrow-switch-accessory left-arrow attributes finished" onClick={() => changeAccessory('left')}>
          <span></span>
          <span></span>
        </div>

        <div className="attributes-images-container">

					<Card img={require(`../images/Logo.png`)} num='0' key={0} />
					<Card img={require(`../images/Logo.png`)} num='1' key={1} />
					<Card img={require(`../images/Logo.png`)} num='2' key={2} />

        </div>
        <div className="arrow-switch-accessory right-arrow attributes" onClick={() => changeAccessory('right')}>
          <span></span>
          <span></span>
        </div>
      </div>
		</div>
*/ }
		</div>
  );
};

const Card = (props) => {

  const num = props.num;
  const img = props.img;

  var startingClass;
  if(num === '0'){
    startingClass = "center";
  }else if(num === '1'){
    startingClass = "center right";
  }else{
    startingClass = "center right hidden-right";
  }

  return (
    <div className={`description-gif-card-attributes ${startingClass} ${num} attributes-card`}>
      <img src={img} alt="Accessory" draggable="false"/>
    </div>
  );
};


export default Description;
