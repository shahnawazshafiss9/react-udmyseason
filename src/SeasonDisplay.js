import React from 'react'
import './seasonDisplay.css'
const sesionConfig = {
    Winter : {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'

    },
    Summer : {
        text: 'Lets hit the beach',
        iconName: 'sun'
    }
}
const getSeasion = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else{
        return lat > 0 ? 'Winter' : 'Summer';
    }

}
const SeasonDisplay = (props) => {
    const seasion = getSeasion(props.lat, new Date().getMonth());
const {text, iconName} = sesionConfig[seasion];


    // const text = seasion === 'Winter'? 'Burr, it is chilly' : 'Lets hit the beach';
    // const icon = seasion === 'winter' ? 'snowflake' : 'sun'

    return (
        <div className={`season-display ${seasion}`}>
            <i className={ ` icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={ ` icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay
