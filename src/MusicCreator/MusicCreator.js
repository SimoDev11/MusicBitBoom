import React from 'react';
import './MusicCreator.css';
import Page from './jsComponents/Page.js';
import './cssComponents/Page.css';

const MusicCreator = (props) => {


				window.scrollTo(0, 0);
				/*
        const account = props.account;
        const contract = props.contract;
				*/
        /*const setAccount = props.setAccount;*/

        return (

          <div className="music-creator-section">
						<Page />
          </div>
        );
};

export default MusicCreator;
