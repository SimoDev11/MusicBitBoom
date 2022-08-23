import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	useEffect(() => {
		if(window.location.pathname === '/'){
			document.getElementsByClassName("home")[0].classList.add("active-section");
		}else{
			document.getElementsByClassName(window.location.pathname.split('/')[1])[0].classList.add("active-section");
		}
	}, []);

  return (
    <div className="navbar">
			<NavSection section="home" sectionName="Home"/>
			<NavSection section="music-creator" sectionName="Music Creator"/>
			<NavSection section="for-fan" sectionName="For Fan"/>
			<NavSection section="nft-market" sectionName="NFT Market"/>
			<NavSection section="about" sectionName="About"/>
			<div className="navbar-links">
				{/*
      	<div className="links-connect">
        	<div className="links-connect-div">Connect Wallet</div>
      	</div>
				*/}
			</div>
    </div>
  );
};

const NavSection = (props) => {
	
	const section = props.section;
	const sectionName = props.sectionName;

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
		<Link className={`navbar-section ${section}`} to={`${section}`} onClick={() => sectionClick(section)}>
					<h1>{sectionName}</h1>
   	</Link>
	);
};

export default Navbar;
