import React from 'react';

const MobileMenu = () => {

	const hamburgerClick = () => {
		document.getElementsByClassName('hamburger')[0].classList.toggle('is-active');
		document.getElementsByClassName('navbar')[0].classList.toggle('open');
	}

	return (
		<div className="hamburger" onClick={() => hamburgerClick()}>
      <span className="line"></span>
      <span className="line"></span>
    	<span className="line"></span>
    </div>
	);
};

export default MobileMenu;
