import React from 'react';
import Logo from './jsComponents/Logo.js';
import Navbar from './jsComponents/Navbar.js';
import Links from './jsComponents/Links.js';
import MobileMenu from './jsComponents/MobileMenu.js';
import './Header.css';
import './cssComponents/Logo.css';
import './cssComponents/Navbar.css';
import './cssComponents/Links.css';
import './cssComponents/MobileMenu.css';

const Header = (props) => {

	const account = props.acccount;
	const setAccount = props.setAccount;

	return (
		<div className="header">
			<Logo />
			<Navbar />
			<Links account={account} setAccount={setAccount} />
			<MobileMenu />
			<div className="header-placeholder">
			</div>
		</div>
	);
};

export default Header;
