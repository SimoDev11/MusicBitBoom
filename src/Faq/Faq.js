import React from 'react';
import './Faq.css';

const Faq = () => {

	window.scrollTo(0, 0);

  return (
    <div className="faq-section">
			<div className="faq-introduction">
				<h1>FAQ</h1>
				<p>If the answer you are looking for isn't provided here, joining our Discord will be helpful.</p>
			</div>
			<div className="faq-questions">
				<Question question="What are the Lost Samurais?" answer="Lost Samurais is a collection of 5000 NFTs, that double as characters inside a Play-to-Earn Strategy Game. Earn $VMON and become the Strongest Shogun in the Metaverse." id='0'/>
				<Question question="What’s $VMON?" answer="$VMON will be the core currency of the Lost Samurais Game, needed to buy Heroes, Buildings and much more." id='1' />
				<Question question="What’s the Supply?" answer="There will be a total of 5000 Samurais." id='2' />
				<Question question="When Launch?" answer="05/22/2022" id='3' />
				<Question question="What’s the Price?" answer="Each Samurai will be 1100 $ONE for Whitelisted people and 1500 $ONE for the others." id='4' />
				<Question question="How do I join the Whitelist?" answer="There’s a total of 200 WL Spots. They’re given out daily through Discord Competitions in our Server, or on Twitter, through Giveaways and Collabs. You can also buy a WL Ticket on NFTKey, Metatrone and other Secondary Marketplaces." id='5' />
			</div>
    </div>
  );
};

const Question = (props) => {

	const { question, answer, id } = props;

	const answerClick = (id) => {
		const items = document.getElementsByClassName('faq-question-answer');
    for(let i = 0; i < items.length; i++){
      if(items[i].classList.contains('open') || (!items[i].classList.contains('open') && items[i].classList.contains(id))){
				document.getElementsByClassName('faq-question')[i].classList.toggle('open');;
        items[i].classList.toggle('open');
      }
    }
	}

	return (
		<div className="faq-question" onClick={() => answerClick(id)}>
      <p>{question}</p>
			<p className={`faq-question-answer ${ id }`}>{answer}</p>
    </div>
	);
};

export default Faq;
