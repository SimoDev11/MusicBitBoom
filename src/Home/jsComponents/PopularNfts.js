import React, { useEffect } from 'react';

const PopularNfts = (props) => {

				
	//SOLUTION: CHECK DESCRIPTION:CSS; USE THE SAME METHOD U USED FOR WORKFLOW; BUT HIDDENLEFT/RIGHT OPACITY ! INSTEAD OF 0
	var interval;
				
	useEffect(() => {
		interval = setInterval(function() { changeAccessory('right'); }, 2000);
		return () => clearInterval(interval);
	}, []);

	/*var contator = [undefined, undefined, 0, 1, 2];*/
	var contator = [0, 1, 2, 3, 4];

	var repeatRight = false;
	var repeatLeft = false;

	var save2 = 0;
	var save3 = 0;

  const changeAccessory = (direction) => {
      if(direction === 'right'){
        if(document.getElementsByClassName('popularNft-gif-card')[contator[3]] !== undefined){
          if(document.getElementsByClassName('popularNft-gif-card')[contator[1]] !== undefined){
            document.getElementsByClassName('popularNft-gif-card')[contator[1]].classList.add('hidden-left');
            contator[0] = contator[1];
          }

          document.getElementsByClassName('popularNft-gif-card')[contator[2]].classList.add('left');
          contator[1] = contator[2];

          document.getElementsByClassName('popularNft-gif-card')[contator[3]].classList.remove('right');
          contator[2] = contator[3];
          contator[3] = undefined;

          document.getElementsByClassName('arrow-switch-accessory left-arrow')[0].classList.remove('finished');

        }
        if(document.getElementsByClassName('popularNft-gif-card')[contator[4]] !== undefined){
          document.getElementsByClassName('popularNft-gif-card')[contator[4]].classList.remove('hidden-right');
          contator[3] = contator[4];
          contator[4] = contator[3] + 1;
        }

				if(document.getElementsByClassName('popularNft-gif-card')[contator[4]] === undefined || repeatRight === true){
					document.getElementsByClassName('popularNft-gif-card')[(contator[3] + 1) % 10].style.transition = "0s";
					document.getElementsByClassName('popularNft-gif-card')[(contator[3] + 1) % 10].classList.remove('left');
					document.getElementsByClassName('popularNft-gif-card')[(contator[3] + 1) % 10].classList.remove('hidden-left');
					document.getElementsByClassName('popularNft-gif-card')[(contator[3] + 1) % 10].classList.add('right');
					document.getElementsByClassName('popularNft-gif-card')[(contator[3] + 1) % 10].classList.add('hidden-right');
					contator[4] = (contator[3] + 1) % 10;
					if(repeatRight === true){
						document.getElementsByClassName('popularNft-gif-card')[save2].style.transition = "0.5s";
					}
					save2 = (contator[3] + 1) % 10;
					repeatRight = true;
				}

        if(contator[3] === undefined){
          contator[4] = undefined;
          document.getElementsByClassName('arrow-switch-accessory right-arrow')[0].classList.add('finished');
        }
      }else{
				if(document.getElementsByClassName('popularNft-gif-card')[contator[1]] !== undefined){

          if(document.getElementsByClassName('popularNft-gif-card')[contator[3]] !== undefined){
            document.getElementsByClassName('popularNft-gif-card')[contator[3]].classList.add('hidden-right');
            contator[4] = contator[3];
          }

          document.getElementsByClassName('popularNft-gif-card')[contator[2]].classList.add('right');
          contator[3] = contator[2];

          document.getElementsByClassName('popularNft-gif-card')[contator[1]].classList.remove('left');
          contator[2] = contator[1];
          contator[1] = undefined;

          document.getElementsByClassName('arrow-switch-accessory right-arrow')[0].classList.remove('finished');
      }

      if(document.getElementsByClassName('popularNft-gif-card')[contator[0]] !== undefined){
        document.getElementsByClassName('popularNft-gif-card')[contator[0]].classList.remove('hidden-left');
        contator[1] = contator[0];
        if(contator[1] > 0){
          contator[0] = contator[1] - 1;
        }else{
          contator[0] = undefined;
        }
      }else{
        document.getElementsByClassName('arrow-switch-accessory left-arrow')[0].classList.add('finished');
      }

			if(document.getElementsByClassName('popularNft-gif-card')[contator[0]] === undefined || repeatLeft === true){
				var save = contator[1] === 0 ? 9 : contator[1] - 1;
				document.getElementsByClassName('popularNft-gif-card')[save].style.transition = "0s";
				document.getElementsByClassName('popularNft-gif-card')[save].classList.remove('right');
        document.getElementsByClassName('popularNft-gif-card')[save].classList.remove('hidden-right');
        document.getElementsByClassName('popularNft-gif-card')[save].classList.add('left');
        document.getElementsByClassName('popularNft-gif-card')[save].classList.add('hidden-left');
        contator[0] = save;
				if(repeatLeft === true){
        	document.getElementsByClassName('popularNft-gif-card')[save3].style.transition = "0.5s";
        }
        save3 = save;
        repeatLeft = true;
			}
    }
  }

	//var myInterval = setInterval(changeAccessory, 2000);

	const move = (input) => {
		clearInterval(interval);
		//interval = setInterval(function() { changeAccessory('right'); }, 5000);
		//intervalTime = 5000;
		if(input === "left"){
			changeAccessory("left");
		}else{
			changeAccessory("right");
		}

	}

	return (
		<div className="popularNfts-container">
			<div className="popular-text">
				<h1>NFT in Evidenza</h1>
			</div>
			<div className="description-gif">
				<div className="plane-for-arrow-popularNft">
        	<div className="orizontal-slider-arrow2 leftarrow" onClick={() => move("left")}>
            <span></span>
          	<span></span>
        	</div>
        	<div className="orizontal-slider-arrow2 rightarrow" onClick={() => move("right")}>
            <span></span>
          	<span></span>
        	</div>
      	</div>

					{/*<div class="arrow-switch-accessory left-arrow attributes finished"><span></span><span></span></div>*/}
        <Card img={require('../images/prova.jpg')} num='0' />
        <Card img={require('../images/prova.jpg')} num='1' />
        <Card img={require('../images/prova.jpg')} num='2' />
        <Card img={require('../images/prova.jpg')} num='3' />
        <Card img={require('../images/prova.jpg')} num='4' />
        <Card img={require('../images/prova.jpg')} num='5' />
        <Card img={require('../images/prova.jpg')} num='6' />
        <Card img={require('../images/prova.jpg')} num='7' />
        <Card img={require('../images/prova.jpg')} num='8' />
        <Card img={require('../images/prova.jpg')} num='9' />
					{/*<div class="arrow-switch-accessory right-arrow attributes finished"><span></span><span></span></div>*/}
			</div>
		</div>
	);
}

/*
const Card = (props) => {

  const num = props.num;
  const img = props.img;
  const animationDelay = num * 1.8;

  return (
    <div style={{ animationDelay: `-${animationDelay}s`}} className={`description-gif-card card${num}`}>
			<div className="card-header">
        <h2>Nicholas Kera</h2>
      </div>
      <div className="card-body">
        <img src={require('../images/prova.jpg')} alt="NftImage" className="card-image" />
      </div>
      <div className="card-footer">
        <div className="nft-name-and-price">
          <h2>Name</h2>
          <h3>Price</h3>
        </div>
        <div className="bid">
          <h3>Place a bid</h3>
        </div>
      </div>
    </div>
  );
};
*/

const Card = (props) => {

  const num = props.num;
  const img = props.img;

  var startingClass;
  if(num === '0'){
    startingClass = "center left hidden-left";
  }else if(num === '1'){
    startingClass = "center left";
  }else if(num === '2'){
    startingClass = "center";
  }else if(num === '3'){
		startingClass = "center right";
	}else{
		startingClass = "center right hidden-right";
	}

  return (
    <div className={`popularNft-gif-card ${startingClass} ${num}`}>
			<div className="card-header">
        <h2>Nicholas Kera</h2>
      </div>
      <div className="card-body">
        <img src={require('../images/prova.jpg')} alt="NftImage" className="card-image" />
      </div>
      <div className="card-footer">
        <div className="nft-name-and-price">
          <h2>Name</h2>
          <h3>Price</h3>
        </div>
        <div className="bid">
          <h3>Place a bid</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularNfts;
