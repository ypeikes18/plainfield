import React from 'react';

import { stethoscope, florida, pennsylvania } from '../../util/urls';

const SplashContent = (props) => {
    return(
        <div id='splash-content'>
            <div id='splash-image-container'>
                <img 
                id='stethoscope'
                src={stethoscope}/>
            </div>
            <h1 id='welcome-header'>
                Welcome to Plainfield Staffing
            </h1>
            <h2 id='splash-h2'>
                Healthcare Positions
            </h2>
            <h3 id='splash-h3'>
                Serving regions all around the U.S
            </h3>
            <div id='map-images-container'>
                <img src={ florida }></img>
                <img src={ pennsylvania }></img>
                <img src={ florida }></img>
                <img src={ pennsylvania }></img>

            </div>
        </div>
    )
}

export default SplashContent;