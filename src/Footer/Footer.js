import React from 'react';
import './Footer.css';

const Footer = () => {
	
	return (
		<div className="footer">
			<div className="copyright">
				<div className="info">
					<div className="musicbitboom">
						<h2>MUSIC BIT BOOM</h2>
						<h3>Whitepaper</h3>
						<h3>Tokenomics</h3>
						<h3>Roadmap</h3>
						<h3>FAQ</h3>
						<h3>Partner</h3>
					</div>
					<div className="legal">
						<h2>LEGAL</h2>
            <h3>Policy Privacy</h3>
            <h3>Condizioni di Vendita</h3>
            <h3>Termini e Condizioni</h3>
            <h3>Tipologia Licenza</h3>
					</div>
				</div>
				<div className="copyright-text">
					<h3>Copyright @2022 - MusicBitBoom All rights reserved</h3>
				</div>
			</div>
			<div className="social-links">
				<div className="discord-twitter">
					<LinkWithName social="discord" href="#" src={require('./images/discordLogo.png')} />
        	<LinkWithName social="twitter" href="#" src={require('./images/twitterLogo.png')} />
				</div>
				<div className="youtube-facebook">
					<LinkWithName social="youtube" href="#" src={require('./images/youtubeLogo.png')} />
        	<LinkWithName social="facebook" href="#" src={require('./images/facebookLogo.png')} />
				</div>
			</div>
		</div>
	);
};

const LinkWithName = (props) => {

  const { social, href, src } = props;

  return (
    <a className="social-with-name" href={href} target="_blank" rel="noopener noreferrer">
      <LinkConstructor social={social} href={href} src={src} />
      <h2>{social}</h2>
    </a>
  );
};

const LinkConstructor = (props) => {

  const { social, href, src } = props;

  return (
    <div className={`links-social ${social}`} href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={social} className={`${social}-img`} />
    </div>
  );
};

export default Footer;
