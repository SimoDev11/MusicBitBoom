import React, { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';

const Workflow = (props) => {

	const contract = props.contract;
	const account = props.account;

	var contator = [undefined, undefined, 0, 1, 2];

  const changeAccessory = (direction) => {
      if(direction === 'right'){
        if(document.getElementsByClassName('description-gif-card-attributes')[contator[3]] !== undefined){
          if(document.getElementsByClassName('description-gif-card-attributes')[contator[1]] !== undefined){
            document.getElementsByClassName('description-gif-card-attributes')[contator[1]].classList.add('hidden-left');
            contator[0] = contator[1];
          }

          document.getElementsByClassName('description-gif-card-attributes')[contator[2]].classList.add('left');
          contator[1] = contator[2];

          document.getElementsByClassName('description-gif-card-attributes')[contator[3]].classList.remove('right');
          contator[2] = contator[3];
          contator[3] = undefined;

          document.getElementsByClassName('arrow-switch-accessory left-arrow')[0].classList.remove('finished');

        }
        if(document.getElementsByClassName('description-gif-card-attributes')[contator[4]] !== undefined){
          document.getElementsByClassName('description-gif-card-attributes')[contator[4]].classList.remove('hidden-right');
          contator[3] = contator[4];
          contator[4] = contator[3] + 1;
        }

        if(contator[3] === undefined){
          contator[4] = undefined;
          document.getElementsByClassName('arrow-switch-accessory right-arrow')[0].classList.add('finished');
        }
      }else{
				if(document.getElementsByClassName('description-gif-card-attributes')[contator[1]] !== undefined){

          if(document.getElementsByClassName('description-gif-card-attributes')[contator[3]] !== undefined){
            document.getElementsByClassName('description-gif-card-attributes')[contator[3]].classList.add('hidden-right');
            contator[4] = contator[3];
          }

          document.getElementsByClassName('description-gif-card-attributes')[contator[2]].classList.add('right');
          contator[3] = contator[2];

          document.getElementsByClassName('description-gif-card-attributes')[contator[1]].classList.remove('left');
          contator[2] = contator[1];
          contator[1] = undefined;

          document.getElementsByClassName('arrow-switch-accessory right-arrow')[0].classList.remove('finished');
      }

      if(document.getElementsByClassName('description-gif-card-attributes')[contator[0]] !== undefined){
        document.getElementsByClassName('description-gif-card-attributes')[contator[0]].classList.remove('hidden-left');
        contator[1] = contator[0];
        if(contator[1] > 0){
          contator[0] = contator[1] - 1;
        }else{
          contator[0] = undefined;
        }
      }else{
        document.getElementsByClassName('arrow-switch-accessory left-arrow')[0].classList.add('finished');
      }
    }
  }
/*
	<div className="workflow-container">
      <WorkflowElement src={require('../images/wallet.png')} text="Connect Wallet" />
      <WorkflowElement src={require('../images/NFT-PNG.png')} text="Crea NFT" />
      <WorkflowElement src={require('../images/buy.png')} text="Sell/Buy Nft" />
    </div>*/

	const jsonFile = {
  "name": "#1",
	"title": "TBA",
  "description": "TBS",
  "image": "QmQqPYGosmNkAvNZSQVBEH3drvHetR4ATPh5XPDzawyfHY",
}

	const [img, setImg] = useState();
	const [audio, setAudio] = useState();

	//const publicKey = 'c9942c8116656ff6d4e1';
  //const privateKey = '5687c454f2243b71d76afa818df81c51c567ddbaacb010539ab107e579a01af8';

	const mintNft = async(file) => {

		//console.log(account);
		//const isUserAllowed = await contract.methods.allowedMinters(account).call();
		//console.log(isUserAllowed);
/*
		if(isUserAllowed){
			handleFile(file);
		}
*/
	}

/*
const handleFile=async (fileToHandle) =>{

    console.log('starting')

    // initialize the form data
    const formData = new FormData()

    // append the file form data to
    formData.append("file", fileToHandle)

    // call the keys from .env
    const API_KEY = publicKey;
    const API_SECRET = privateKey;

    // the endpoint needed to upload the file
    const url =  `https://api.pinata.cloud/pinning/pinFileToIPFS`

    const response = await axios.post(
      url,
      formData,

      {          maxContentLength: "Infinity",
          headers: {
              "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
              'pinata_api_key': publicKey,
              'pinata_secret_api_key': privateKey

          }
      }
  )

  .then((response) => {
    console.log(response);
    // get the hash
    console.log(response.data.IpfsHash);
    //setIPFSHASH(response.data.IpfsHash);

    //upload metadata
    //handleFileJson(response.data.IpfsHash);
  }, (error) => {
    console.log(error);
  });
  }
*/

	return (
		<div className="attributes-images-rarity-container">
      <div className="attributes-images-arrow-container">
        <div className="arrow-switch-accessory left-arrow attributes finished" onClick={() => changeAccessory('left')}>
          <span></span>
          <span></span>
        </div>

        <div className="attributes-images-container">

					<div className="nft-creation-menu">
						<div className="nft-img-file-cont">
							<div className="nft-img-cont">
								<div className="add-file">
									<h1>Add Image</h1>
					{/*
									<div type="file" onChange={(event)=>setImg(event.target.files[0])} className="plus">
									+
									</div>
									*/}
									<input className="inpt" type="file" onChange={(event)=>setImg(event.target.files[0])}/>
								</div>
							</div>
							<div className="nft-audio-file">
								<div className="add-file">
									<h1>Add Audio</h1>
					{/*
                  <div className="plus">
                  +
                  </div>
									*/}
									<input className="inpt" type="file" onChange={(event)=>setAudio(event.target.files[0])}/>
                </div>
							</div>
						</div>
						<div className="nft-title-desc-cont">
              <input type="text" placeholder="TITLE" className="nft-title"></input>

							<input type="text" placeholder="DESCRIPTION" className="nft-desc"></input>

							<div className="nft-min-btn" onClick={() => mintNft(img)} >
								<h1>MINT</h1>
							</div>
		</div>
	</div>

	<Card img={require(`../images/1_CONWALLET.png`)} num='0' key={0} />
	<Card img={require(`../images/2_CREANFT.png`)} num='1' key={1} />
	<Card img={require(`../images/3_SELL.png`)} num='2' key={2} />

</div>
<div className="arrow-switch-accessory right-arrow attributes" onClick={() => changeAccessory('right')}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

	);
}

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

	const mintMenu = (n) => {
		if(n === '1'){
			document.getElementsByClassName('nft-creation-menu')[0].style.visibility = "visible";
						/*
    	document.getElementsByClassName('nft-creation-menu')[0].style.backgroundColor = "rgba(255, 255, 255, 1)";
			*/
			document.getElementsByClassName('nft-creation-menu')[0].style.transform = "translateZ(130px) scale(0.92)";
			
			document.getElementsByClassName('arrow-switch-accessory')[0].style.display = "none";
			document.getElementsByClassName('arrow-switch-accessory')[1].style.display = "none";

			/*document.getElementsByClassName('nft-img-cont')[0].style.borderColor = "rgba(0, 0, 0, 1)";*/
		}
  }


  return (
    <div className={`description-gif-card-attributes ${startingClass} ${num} attributes-card`} onClick={() => mintMenu(num)}>
      <img src={img} alt="Accessory" draggable="false"/>
    </div>
  );
};


const WorkflowElement = (props) => {

	const src = props.src;
	const text = props.text;

	//${rotX0} solo se è l elemento [0], altrimenti usa ${rotX1 o 2}
	return(

		<div className="element-container">
    	<div className="element-header"><h2>{text}</h2></div>
    	<div className="workflow-element">
      	<img src={src} alt="Workflow-element" draggable="false" />
    	</div>
    </div>
	);
}

export default Workflow;
