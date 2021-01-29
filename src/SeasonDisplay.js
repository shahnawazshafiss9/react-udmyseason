import React from 'react'

const getSeasion = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else{
        return lat > 0 ? 'Winter' : 'Summer';
    }

}
const SeasonDisplay = (props) => {
    const seasion = getSeasion(props.lat, new Date().getMonth());
    const text = seasion === 'Winter'? 'Burr, it is chilly' : 'Lets hit the beach';
    return (
        <div>{text}</div>
    );
}

export default SeasonDisplay
