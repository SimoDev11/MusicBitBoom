import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Web3 from 'web3';
import musicbitboom from './abis/musicbitboom.json';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import MusicCreator from './MusicCreator/MusicCreator.js';
import ForFan from './ForFan/ForFan.js';
import About from './About/About.js';
/*
import Minted from './Minted/Minted.js';
import Token from './Token/Token.js';
import Attributes from './Attributes/Attributes.js';
import Faq from './Faq/Faq.js';
*/
import Footer from './Footer/Footer.js';
import './index.css';

import detectEthereumProvider from '@metamask/detect-provider';

const App = () => {

	const [contract, setContract] = useState();
  const [account, setAccount] = useState();

	useEffect(() => {
    signInMetamask();
  }, []);

  const signInMetamask = async () => {
    //const provider = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/xxxxxxx"));

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      //window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

    load();

  }

  const load = async() => {
    const web3 = window.web3
    const networkId = await web3.eth.net.getId()
    const networkData = musicbitboom.networks[networkId];
    if(networkData) {
      const musicContract = web3.eth.Contract(musicbitboom.abi, networkData.address, { transactionConfirmationBlocks: 1 })
      setContract(musicContract);
      const totalBalance = await musicContract.methods.totalMint().call();
      console.log(totalBalance);
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }

  }

	

	return (
		<>
      <Router>
        <Header account={account} setAccount={setAccount} />
					
          <Switch>
            <Route path='/' exact component={() => <Home contract={contract} account={account} />} />
						<Route path='/home' exact component={() => <Home contract={contract} account={account} />} />
						<Route path='/music-creator' exact component={() => <MusicCreator contract={contract} account={account} />} />
						<Route path='/for-fan' exact component={() => <ForFan />} />
						<Route path='/about' exact component={() => <About />} />
					{/*
						<Route path='/faq' exact component={() => <Faq />} />
						<Route path='/minted' exact component={() => <Minted />} />
						<Route path='/attributes' exact component={() => <Attributes />} />
						<Route path='/token' exact component={() => <Token />} />
						*/}
          </Switch>

				<Footer />
      </Router>
    </>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
