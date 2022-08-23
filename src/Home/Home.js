import React from 'react';
import './Home.css';
import Description from './jsComponents/Description.js';
import PopularNfts from './jsComponents/PopularNfts.js';
import Workflow from './jsComponents/Workflow.js';
import Sliders from './jsComponents/Sliders.js';
import Mail from './jsComponents/Mail.js';
import './cssComponents/Description.css';
import './cssComponents/PopularNfts.css';
import './cssComponents/Workflow.css';
import './cssComponents/Sliders.css';
import './cssComponents/Mail.css';

const Home = (props) => {

				window.scrollTo(0, 0);
				
        const account = props.account;
				const contract = props.contract;
				
        /*const setAccount = props.setAccount;*/

        return (
				
					<div className="home-section">
						<Description />
						<PopularNfts />
						<Workflow account={account} contract={contract} />
						<Sliders />
						<Mail />
          </div>
        );
};

export default Home;
