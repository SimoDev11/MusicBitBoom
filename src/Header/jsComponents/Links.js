import React from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const Links = (props) => {

	const account = props.acccount;
  const setAccount = props.setAccount;

	const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      console.error('Not found accounts');
    } else {
      setAccount(accounts[0]);
      //load();
    }
  }

	//this function should be called only when Connect button in the Header is clicked (so not from the start)
  const signInMetamask = async() => {
    const provider = await detectEthereumProvider();

    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }

    if (!provider) {
      console.error('Metamask not found');
      return;
    }

    // MetaMask events
    provider.on('accountsChanged', handleAccountsChanged);

    provider.on('disconnect', () => {
      console.log('disconnect');
    });

    provider.on('chainIdChanged', chainId => console.log('chainIdChanged', chainId));

    provider
      .request({ method: 'eth_requestAccounts' })
      .then(async params => {
        handleAccountsChanged(params);
      })
      .catch(err => {
        if (err.code === 4001) {
          console.error('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  return (
    <div className="links">
			<div className="links-connect">
				<div className="links-connect-div" onClick={() => signInMetamask()}>Connect Wallet</div>
      </div>
    </div>
  );
};

export default Links;
