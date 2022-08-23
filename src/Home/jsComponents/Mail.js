import React from 'react'; 

const Mail = (props) => {

	const sendMail = () => {
		window.open('mailto:test@example.com');
	}

	let rippleDiv;

	const effect = (e) => {

		const left = e.clientX - e.target.getBoundingClientRect().left;
  	const top = e.clientY - e.target.getBoundingClientRect().top;

  	rippleDiv = document.createElement("div");
  	rippleDiv.classList.add("ripple");
  	rippleDiv.style.left = `${left}px`;
  	rippleDiv.style.top = `${top}px`;

  	document.getElementsByClassName('mail-send')[0].prepend(rippleDiv);

	}

	const leave = (e) => {
		document.getElementsByClassName('mail-send')[0].removeChild(rippleDiv);
	}

	return (
		<div className="mail-section">
			<div className="text-mail-container">
				<div className="mail-text">
					<p>Scrivi alla nostra Newsiter e rimani in contatto sulle ultime novità!</p>
				</div>
				<div className="mail-send" onClick={() => sendMail()} onMouseEnter={(event) => effect(event)} onMouseLeave={(event) => leave(event)}>
				<h2>Send Mail</h2>
				</div>
			</div>
			<img src={require('../images/Logo.png')} alt="Img" draggable="false"/>
		</div>
  );
};

export default Mail;
