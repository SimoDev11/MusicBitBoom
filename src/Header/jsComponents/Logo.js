import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {

	const sectionClick = (section) => {
    const sections = document.getElementsByClassName("navbar-section");
    for(let i = 0; i < sections.length; i++){
      if((sections[i].classList.contains("active-section") && !sections[i].classList.contains(section)) || (!sections[i].classList.contains("active-section") && sections[i].classList.contains(section))){
        sections[i].classList.toggle("active-section");
      }
    }

    if(document.getElementsByClassName('navbar')[0].classList.contains('open')){
      document.getElementsByClassName('hamburger')[0].classList.toggle('is-active');
      document.getElementsByClassName('navbar')[0].classList.toggle('open');
    }
  }
	
	return (
		<Link className="logo" to='/' onClick={() => sectionClick('home')}>
      <img src={require('../images/musicLogo.png')} alt="Logo" className="logo-img" />
    </Link>
	);
};

export default Logo;
